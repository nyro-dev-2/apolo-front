import { defineType, defineField } from "sanity"

export default defineType({
  name: "category",
  title: "Categoría de producto",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nombre de la categoría",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (identificador único)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción (opcional)",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
})
