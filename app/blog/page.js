import Link from "next/link";
import { buildMetadata } from "@/app/lib/seo";
import { getAllPosts } from "@/app/lib/posts";

export const metadata = buildMetadata("blog");

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <div className="page active">
      <section className="hero" style={{ paddingBottom: "clamp(40px,6vw,70px)" }}>
        <div className="hero-bg">
          <div className="grid-fx"></div>
          <div className="orb1"></div>
        </div>
        <div className="wrap hero-inner">
          <div className="eyebrow reveal">The Esdar blog</div>
          <h1
            className="reveal"
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 600,
              fontSize: "clamp(36px,5vw,60px)",
              lineHeight: 1.05,
              letterSpacing: "-.02em",
            }}
          >
            Ideas, activities &amp; <em className="grad-text">updates</em>
          </h1>
          <p className="lead reveal" style={{ maxWidth: 600 }}>
            Stories from our labs and classrooms, practical guides for schools, and the
            latest on Robotics &amp; AI education from Esdar.
          </p>
        </div>
      </section>

      <section className="block" style={{ paddingTop: "clamp(30px,4vw,50px)" }}>
        <div className="wrap">
          <div className="grid g3 reveal">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="pcard">
                <div className="pimg">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <span className="tag">{post.tag}</span>
                </div>
                <div className="pbody">
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--light)",
                      marginBottom: 8,
                      fontWeight: 500,
                    }}
                  >
                    {formatDate(post.date)} · {post.readMins} min read
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="more">Read article →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
