import { defineType, defineField } from "sanity";

export default defineType({
  name: "category",
  title: "Catégories",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "color",
      title: "Couleur (hex)",
      type: "string",
      description: "Ex: #3BD1F7",
    }),
  ],
});