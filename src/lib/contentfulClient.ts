// src/lib/contentfulClient.ts
import { createClient } from "contentful";

const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const environment = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || "master";

if (!space || !accessToken) {
  console.error(
    "[Contentful] Missing SPACE_ID or ACCESS_TOKEN. Check your .env file."
  );
}

export const contentfulClient = createClient({
  space,
  accessToken,
  environment,
});
