import { groq } from "next-sanity";

export const articlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    readTime,
    publishedAt,
    category->{ title, color },
    author->{ name, image }
  }
`;

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    readTime,
    publishedAt,
    content,
    category->{ title, color },
    author->{ name, role, image }
  }
`;