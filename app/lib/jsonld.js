import { SITE, SITE_URL } from "./seo";

// Organization + local business. Esdar is an education initiative with a
// physical address in Bikaner, so we describe it as an EducationalOrganization.
export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/images/img-01-d7446ff4.png`,
    image: `${SITE_URL}${SITE.ogImage}`,
    description: SITE.description,
    slogan: SITE.tagline,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    areaServed: "IN",
    sameAs: [SITE.whatsapp],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      email: SITE.email,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

export function articleJsonLd(post) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: { "@type": "Organization", name: post.author || SITE.name, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/img-01-d7446ff4.png`,
      },
    },
    keywords: (post.keywords || []).join(", "),
    articleSection: post.tag,
    inLanguage: "en-IN",
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function faqJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

// FAQ content mirrored from the FAQ page for rich-result eligibility.
export const FAQ_ITEMS = [
  {
    q: "How does Esdar set up a robotics & AI program in our school?",
    a: "We start by understanding your goals, space, and grades, then design and install the right lab, supply curriculum and kits, and train your team — with ongoing support throughout.",
  },
  {
    q: "What's the difference between a camp and a lab setup?",
    a: "Camps (7-day, 15-day, or 3-month) bring an intensive, project-based program into your school for a fixed period. A lab setup is a permanent, future-ready robotics & AI lab with year-long curriculum and support.",
  },
  {
    q: "Which grades do you cover?",
    a: "Our programs are designed for grades 3–12, with grade-wise curriculum and projects that progress from foundational concepts to advanced automation and AI.",
  },
  {
    q: "Do you provide the equipment, or do we?",
    a: "Esdar provides all hardware and kits — Arduino, Micro:bit, drones, and more. The school provides the space, student batches, and a timetable.",
  },
  {
    q: "Who delivers the sessions?",
    a: "Certified, full-time Esdar instructors deliver the program, and we can train your staff so quality stays consistent.",
  },
  {
    q: "Is the curriculum aligned to NEP 2020?",
    a: "Our programs are designed to build practical, future-ready skills in line with modern education goals. Detailed curriculum is provided as part of onboarding.",
  },
  {
    q: "Can the program be customized?",
    a: "Yes — every package is tailored to your school's grades, space, and objectives.",
  },
  {
    q: "Do students receive certificates?",
    a: "Yes. Every participant receives a certificate and builds a portfolio of completed projects.",
  },
  {
    q: "What is Esdar's vision?",
    a: "To build a generation of students who understand Robotics & AI — innovators, problem-solvers, and creators of technology capable of applying their knowledge to real-world challenges.",
  },
];
