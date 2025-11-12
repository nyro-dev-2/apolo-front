import { Suspense } from "react"
import { sanityClient } from "@/lib/sanity"
import {
  ContactPageClient,
  ContactPageFallback,
  ContactProductOption,
} from "./contact-page-client"

const PRODUCTS_QUERY = `
  *[_type == "product"]{
    "id": coalesce(slug.current, _id),
    name,
    "category": category->title
  } | order(name asc)
`

const CATEGORIES_QUERY = `
  *[_type == "category"]{
    "id": _id,
    "label": title
  } | order(title asc)
`

export default async function ContactPage() {
  const products = await sanityClient.fetch<ContactProductOption[]>(
    PRODUCTS_QUERY,
    {},
    { next: { revalidate: 180 } },
  )

  const categories = await sanityClient.fetch<{ id: string; label: string }[]>(
    CATEGORIES_QUERY,
    {},
    { next: { revalidate: 180 } },
  )

  return (
    <Suspense fallback={<ContactPageFallback />}>
      <ContactPageClient products={products} categories={categories} />
    </Suspense>
  )
}
