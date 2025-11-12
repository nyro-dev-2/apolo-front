import { mkdirSync, existsSync } from "node:fs"
import { join, extname, basename } from "node:path"
import sharp from "sharp"

const logos = [
  "cruz-del-sur-logo.jpg",
  "flores-cargo-logo.jpg",
  "dhl-logo.jpg",
  "fedex-logo.jpg",
]

const inputDir = join(process.cwd(), "public", "logos")
const outputDir = join(inputDir, "optimized")

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true })
}

async function convert() {
  await Promise.all(
    logos.map(async (file) => {
      const inputPath = join(inputDir, file)
      const base = basename(file, extname(file))
      const pipeline = sharp(inputPath).resize({ width: 260, withoutEnlargement: true }).flatten({ background: "#ffffff" })

      await pipeline.clone().webp({ quality: 82 }).toFile(join(outputDir, `${base}.webp`))
      await pipeline.clone().avif({ quality: 70 }).toFile(join(outputDir, `${base}.avif`))
    }),
  )
}

convert().catch((error) => {
  console.error(error)
  process.exit(1)
})
