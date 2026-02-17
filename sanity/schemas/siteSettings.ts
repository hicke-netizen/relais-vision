import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Paramètres du site",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Nom du site",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "heroImage",
      title: "Image Hero",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "phone",
      title: "Téléphone",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Adresse",
      type: "text",
    }),
    defineField({
      name: "doctolib",
      title: "Lien Doctolib",
      type: "url",
    }),
  ],
});