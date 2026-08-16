import { MetadataRoute } from "next";
import { DATA } from "@/data/resume";
import { allPosts } from "content-collections";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DATA.url.replace(/\/$/, "");

  // Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/chrome-extension-developer-for-hire`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic project case study routes
  const projectRoutes: MetadataRoute.Sitemap = allPosts.map((post) => {
    const slug = post._meta.path.replace(/\.mdx$/, "");
    return {
      url: `${baseUrl}/projects/${slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...projectRoutes];
}
