import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lablink.vishnumoguluri.com/",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://lablink.vishnumoguluri.com/downloads/",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
