import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sih-guide-india.vercel.app";
  const lastModified = new Date("2026-10-09T00:00:00.000Z");

  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never";
  }> = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    {
      path: "/guides/sih-problem-statement-selection",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      path: "/guides/internal-hackathon-round",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      path: "/guides/hackathon-team-roles",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      path: "/guides/beginner-hackathon-preparation",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      path: "/templates/sih-ppt-format",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      path: "/tech-stacks/hackathon-prototype-stack",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    { path: "/blog", priority: 0.8, changeFrequency: "daily" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
