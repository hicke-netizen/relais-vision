import { defineType, defineField } from "sanity";

export default defineType({
  name: "author",
  title: "Auteurs",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Rôle",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "Biographie",
      type: "text",
    }),
  ],
});