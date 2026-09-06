import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";
import { servicePages } from "@/data/services";
import { siteInfo } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteInfo.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...servicePages.map((service) => ({
      url: `${siteInfo.url}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...caseStudies.filter((caseStudy) => caseStudy.isPublished).map((caseStudy) => ({
      url: `${siteInfo.url}/work/${caseStudy.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
