import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/app/lib/posts";
import { articleJsonLd, breadcrumbJsonLd } from "@/app/lib/jsonld";
import { SITE } from "@/app/lib/seo";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: SITE.name,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [post.author || SITE.name],
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <div className="page active">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }}
      />

      <article>
        <section className="hero" style={{ paddingBottom: "clamp(20px,3vw,32px)" }}>
          <div className="hero-bg">
            <div className="grid-fx"></div>
            <div className="orb1"></div>
          </div>
          <div className="wrap hero-inner" style={{ maxWidth: 820 }}>
            <nav className="crumbs reveal" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span> / </span>
              <Link href="/blog">Blog</Link>
            </nav>
            <div className="eyebrow reveal" style={{ marginTop: 10 }}>
              {post.tag}
            </div>
            <h1
              className="reveal"
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 600,
                fontSize: "clamp(30px,4.4vw,52px)",
                lineHeight: 1.08,
                letterSpacing: "-.02em",
              }}
            >
              {post.title}
            </h1>
            <div
              className="reveal"
              style={{ color: "var(--light)", fontWeight: 500, marginTop: 14 }}
            >
              By {post.author} · {formatDate(post.date)} · {post.readMins} min read
            </div>
          </div>
        </section>

        <section className="block" style={{ paddingTop: "clamp(20px,3vw,34px)" }}>
          <div className="wrap" style={{ maxWidth: 820 }}>
            <div className="article-cover reveal">
              <img src={post.image} alt={post.title} />
            </div>
            <div
              className="article reveal"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />

            <div className="article-cta reveal">
              <h3>Bring Robotics &amp; AI to your school</h3>
              <p>
                Esdar sets up labs, runs camps, and supplies kits, instructors and
                curriculum end-to-end. Let&apos;s talk about your school.
              </p>
              <Link className="btn" href="/contact">
                Book a Meeting →
              </Link>
            </div>
          </div>
        </section>

        <section className="block bg-surface">
          <div className="wrap">
            <h2 className="reveal" style={{ marginBottom: 24, fontFamily: "var(--serif)" }}>
              More from the blog
            </h2>
            <div className="grid g3 reveal">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="pcard">
                  <div className="pimg">
                    <img src={p.image} alt={p.title} loading="lazy" />
                    <span className="tag">{p.tag}</span>
                  </div>
                  <div className="pbody">
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <div className="more">Read article →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
