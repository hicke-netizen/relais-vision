import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "relais-vision-montdidier",
  title: "Relais Vision Montdidier",
  projectId: "qd71f47k",
  dataset: "production",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});