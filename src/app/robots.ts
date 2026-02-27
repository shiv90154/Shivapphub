import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://shivapphub.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Disallow any admin or private paths if they exist
      // disallow: ["/admin", "/private"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}