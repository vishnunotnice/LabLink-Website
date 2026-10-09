import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "/", changeFrequency: "monthly", priority: 1 },
    { url: "/downloads", changeFrequency: "monthly", priority: 0.8 },
  ];
}
