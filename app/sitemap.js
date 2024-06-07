export const WEBSITE_HOST_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://opay-redesign.netlify.app/";

export default function sitemap() {
  const changeFrequency = "daily";

  const routes = ["http://opay-redesign.netlify.app/"].map((route) => ({
    url: `${WEBSITE_HOST_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));

  return [...routes];
}
