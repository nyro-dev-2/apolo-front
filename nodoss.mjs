import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })

import { createClient } from "@sanity/client"

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION || "2025-01-01",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

// 🔍 Nombres de los documentos a eliminar
const badNames = [
  "Placa Cervical Anterior PROCTOPUS™",
  "Prótesis de Disco Cervical PROCORAL™",
  "Caja Intersomática Anterior PEEK Bladed PROYSTER-M™",
  "Caja Intersomática Anterior PEEK Stand-Alone PROYSTER-D™",
  "Caja Intersomática Anterior PEEK PROYSTER™"
]

const query = `
  *[_type == "product" && name in $names]._id
`

async function deleteBadDocs() {
  try {
    console.log("🔍 Buscando documentos Prodorth con nombres incorrectos...")
    const ids = await client.fetch(query, { names: badNames })
    if (!ids.length) {
      console.log("✅ No se encontraron documentos con esos nombres.")
      return
    }

    console.log("🧾 IDs encontrados:", ids)
    console.log("🗑️ Eliminando documentos...")

    for (const id of ids) {
      await client.delete(id)
      console.log(`   ✔️ Eliminado: ${id}`)
    }

    console.log("✅ Eliminación completada correctamente.")
  } catch (err) {
    console.error("❌ Error durante la eliminación:", err.message)
  }
}

deleteBadDocs()
