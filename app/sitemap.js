import { PAGES } from "./lib/routes";
import { SITE_URL } from "./lib/seo";
import { getAllPosts } from "./lib/posts";

// Higher priority for the homepage and top commercial pages.
const PRIORITY = {
  home: 1.0,
  schools: 0.9,
  roboticsai: 0.9,
  labsetup: 0.8,
  camps: 0.8,
  coding: 0.8,
  arvrlab: 0.8,
  kits: 0.7,
  contact: 0.7,
  projects: 0.6,
  about: 0.6,
  faq: 0.6,
  blog: 0.5,
};

export default function sitemap() {
  const now = new Date();
  const pages = PAGES.map((p) => ({
    url: `${SITE_URL}/${p.path}`.replace(/\/$/, "") || SITE_URL,
    lastModified: now,
    changeFrequency: p.id === "blog" ? "weekly" : "monthly",
    priority: PRIORITY[p.id] ?? 0.6,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
