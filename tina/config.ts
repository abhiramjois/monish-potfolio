import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content",
        fields: [
          { name: "title", label: "Title", type: "string" }, // Title field (frontmatter)
          {
            name: "image",
            label: "Image",
            type: "image", // Image upload field (frontmatter)
          },
          { 
            name: "description",
            label: "Description",
            type: "string", // Description field (frontmatter)
          },
          {
            name: "body",  // Name of the field for body content
            label: "Body Content", // Display name for the editor
            type: "rich-text", // Type for rich text editing of the body content
            isBody: true,  // Mark this field as the body content for the markdown file
          },
        ],
      },
    ],
  },
});
