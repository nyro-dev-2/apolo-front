import { sanityClient } from "./sanity"

async function checkProducts() {
  const result = await sanityClient.fetch(`*[] { _id, _type, name }`)
  console.table(result)
}

checkProducts()
