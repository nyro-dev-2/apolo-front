import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "uab2saqb",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-01",
  useCdn: false,
  perspective: "published",
  token: process.env.SANITY_WRITE_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);
