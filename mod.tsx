/**
 * ======================================================
 * 🧩 Sanity Script — Limpieza + Reinserción (con _key)
 * Autor: Fabián Espinoza
 * - Elimina productos con slug "[object Object]"
 * - Vuelve a crear los productos desde JSON
 * - Añade _key en imágenes y features
 * ======================================================
 */

import fs from "fs";
import path from "path";
import crypto from "crypto";
import dotenv from "dotenv";
import { createClient } from "@sanity/client";

dotenv.config({ path: ".env.local" });

interface ProductData {
  name: string;
  slug: string | { current: string };
  category: string;
  manufacturer?: string;
  shortDescription: string;
  fullDescription: string;
  features?: string[] | { value: string }[];
}

interface SanityImageRef {
  _key: string;
  _type: "image";
  asset: { _type: "reference"; _ref: string };
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_WRITE_TOKEN!,
  apiVersion: process.env.SANITY_API_VERSION!,
  useCdn: false,
});

const productsDir = path.resolve("public/products");
const productsFile = path.resolve("products_clean.json");

if (!fs.existsSync(productsFile)) {
  console.error("❌ No se encontró el archivo products_clean.json");
  process.exit(1);
}

const productsData: ProductData[] = JSON.parse(fs.readFileSync(productsFile, "utf8"));

// ======================================================
// 🧹 Eliminar productos con slug defectuoso
// ======================================================
async function deleteInvalidSlugs() {
  const badDocs = await client.fetch(
    `*[_type == "product" && slug.current == "[object Object]"]{_id, name}`
  );

  if (badDocs.length === 0) {
    console.log("✅ No hay productos con slug '[object Object]'.");
    return;
  }

  console.log(`🗑️  Eliminando ${badDocs.length} productos con slug '[object Object]'...`);
  for (const doc of badDocs) {
    await client.delete(doc._id);
    console.log(`   ➤ Eliminado: ${doc.name}`);
  }
  console.log("✅ Limpieza de slugs inválidos completada.\n");
}

// ======================================================
// 🖼️ Subir imágenes con _key único
// ======================================================
async function uploadImages(slug: string): Promise<SanityImageRef[]> {
  const files = fs
    .readdirSync(productsDir)
    .filter((f) => f.startsWith(slug) && /\.(png|jpg|jpeg|webp)$/i.test(f));

  const assets: SanityImageRef[] = [];
  for (const file of files) {
    try {
      const asset = await client.assets.upload("image", fs.createReadStream(path.join(productsDir, file)), {
        filename: file,
      });
      assets.push({
        _key: crypto.randomUUID(),
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
      });
      console.log(`🖼️  Subida: ${file}`);
    } catch (err: any) {
      console.error(`❌ Error subiendo ${file}: ${err.message}`);
    }
  }
  return assets;
}

// ======================================================
// 🚀 Reemplazar productos
// ======================================================
async function replaceProducts() {
  for (const [i, p] of productsData.entries()) {
    console.log(`\n======================================================`);
    console.log(`🧩 (${i + 1}/${productsData.length}) ${p.name}`);

    const slugStr = typeof p.slug === "string" ? p.slug : p.slug?.current || "";
    if (!slugStr) {
      console.warn(`⚠️ Producto sin slug válido, omitido: ${p.name}`);
      continue;
    }

    // Eliminar si ya existe
    const existing = await client.fetch(
      `*[_type == "product" && slug.current == $slug][0]{_id}`,
      { slug: slugStr }
    );
    if (existing?._id) {
      await client.delete(existing._id);
      console.log(`🗑️  Eliminado existente: ${slugStr}`);
    }

    // Subir imágenes
    const images = await uploadImages(slugStr);

    // Convertir features a string[]
    const features =
      Array.isArray(p.features)
        ? p.features.map((f: any) => (typeof f === "string" ? f : f.value || ""))
        : [];

    const doc = {
      _type: "product",
      name: p.name,
      slug: { _type: "slug", current: slugStr },
      category: p.category,
      manufacturer: p.manufacturer || "",
      shortDescription: p.shortDescription,
      fullDescription: p.fullDescription,
      features,
      images,
    };

    try {
      const created = await client.create(doc);
      console.log(`✅ Creado correctamente: ${created._id}`);
    } catch (err: any) {
      console.error(`❌ Error creando ${p.name}: ${err.message}`);
    }
  }

  console.log("\n🎉 Reemplazo completo sin duplicados ni slugs corruptos.\n");
}

// ======================================================
// 🧠 Ejecutar
// ======================================================
(async () => {
  await deleteInvalidSlugs();
  await replaceProducts();
})();
