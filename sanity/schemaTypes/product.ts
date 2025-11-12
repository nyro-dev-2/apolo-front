import { defineType, defineField } from "sanity"

export default defineType({
  name: "product",
  title: "Producto",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre del producto",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Categoría",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
      description: "Selecciona la categoría a la que pertenece este producto.",
    }),

    defineField({
      name: "manufacturer",
      title: "Fabricante / Marca",
      type: "string",
    }),
    defineField({
      name: "shortDescription",
      title: "Descripción breve",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "fullDescription",
      title: "Descripción completa",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "features",
      title: "Características principales",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "images",
      title: "Imágenes del producto",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Texto alternativo",
              type: "string",
            },
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "category->title",
      media: "images.0",
    },
  },
})
