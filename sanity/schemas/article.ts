import { defineType, defineField } from "sanity";

export default defineType({
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Extrait",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "mainImage",
      title: "Image principale",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "category",
      title: "Catégorie",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "author",
      title: "Auteur",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
    }),
    defineField({
      name: "readTime",
      title: "Temps de lecture",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Contenu",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Titre 2", value: "h2" },
            { title: "Titre 3", value: "h3" },
          ],
        },
        { type: "image", options: { hotspot: true } },
      ],
    }),
  ],
});