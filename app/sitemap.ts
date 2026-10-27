import type { MetadataRoute } from "next";
import { programs } from "./programs/data";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/programs", "/blog", "/contact"];

  return [
    ...staticPaths.map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.8,
    })),
    ...programs.map((program) => ({
      url: `${SITE_URL}/programs/${program.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
