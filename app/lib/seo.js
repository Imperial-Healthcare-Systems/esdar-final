import { HREF } from "./routes";

// Production URL — override with NEXT_PUBLIC_SITE_URL in the environment.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.esdar.in"
).replace(/\/$/, "");

export const SITE = {
  name: "Esdar Technologies",
  legalName: "Esdar Technologies",
  tagline: "We spark innovation",
  description:
    "Esdar partners with schools to deliver complete robotics & AI education — lab setup, camps, kits, trained instructors and curriculum.",
  email: "connect@esdar.in",
  phone: "+91 95090 64073",
  phoneRaw: "+919509064073",
  whatsapp: "https://wa.me/919509064073",
  address: {
    street: "Masjid Chowk, Nokha",
    city: "Bikaner",
    region: "Rajasthan",
    postalCode: "334803",
    country: "IN",
  },
  ogImage: "/opengraph-image",
};

// Per-page SEO. `title` feeds the "%s | Esdar Technologies" template;
// `home` uses an absolute title so the brand isn't duplicated.
export const PAGE_SEO = {
  home: {
    title: { absolute: "Esdar Technologies — Robotics & AI Labs, Camps & Curriculum for Schools" },
    description:
      "Esdar equips schools with future-ready Robotics & AI education — lab setup, camps, kits, trained instructors and grade-wise curriculum for classes 3–12.",
    keywords: [
      "robotics education",
      "AI labs for schools",
      "robotics lab setup",
      "STEM education India",
      "robotics for schools",
    ],
  },
  schools: {
    title: "Robotics & AI Programs for Schools",
    description:
      "Partner with Esdar to bring end-to-end Robotics & AI programs to your school — labs, kits, certified instructors and curriculum, tailored to your grades and space.",
    keywords: ["robotics program for schools", "AI education for schools", "school STEM partner"],
  },
  roboticsai: {
    title: "Robotics & AI Lab for Schools",
    description:
      "Set up a future-ready Robotics & AI lab in your school with Esdar — hardware, kits, grade-wise curriculum and trained instructors for hands-on learning.",
    keywords: ["robotics and AI lab", "AI lab for schools", "school robotics lab"],
  },
  coding: {
    title: "Coding Lab for Schools",
    description:
      "Build core coding and computational-thinking skills with Esdar's Coding Lab — project-based lessons from block coding to Python for grades 3–12.",
    keywords: ["coding lab for schools", "learn to code", "coding classes for students"],
  },
  arvrlab: {
    title: "AR/VR Lab for Schools",
    description:
      "Bring immersive learning to your classroom with Esdar's AR/VR Lab — interactive experiences that make science, robotics and STEM concepts come alive.",
    keywords: ["AR VR lab for schools", "immersive learning", "virtual reality education"],
  },
  labsetup: {
    title: "Robotics Lab Setup for Schools",
    description:
      "Esdar designs and installs complete, future-ready robotics labs for schools — equipment, kits, year-long curriculum and ongoing instructor support.",
    keywords: ["robotics lab setup", "school lab installation", "STEM lab for schools"],
  },
  camps: {
    title: "Robotics & AI Camps for Students",
    description:
      "Intensive, project-based Robotics & AI camps — 7-day, 15-day and 3-month programs delivered at your school by certified Esdar instructors.",
    keywords: ["robotics camp", "AI camp for students", "summer robotics camp", "STEM camp"],
  },
  kits: {
    title: "Robotics & AI Kits — Arduino, Micro:bit & Drones",
    description:
      "Hands-on Robotics & AI kits from Esdar — Arduino, Micro:bit, drones and more, matched to grade-wise projects and curriculum for schools.",
    keywords: ["robotics kits", "Arduino kits", "Micro:bit", "drone kits for schools"],
  },
  projects: {
    title: "Student Robotics & AI Projects",
    description:
      "Explore real Robotics & AI projects Esdar students build — from automation to AI applications that turn classroom concepts into working prototypes.",
    keywords: ["student robotics projects", "AI projects", "STEM projects for students"],
  },
  about: {
    title: "About Esdar Technologies",
    description:
      "Esdar is an innovation-driven education initiative on a mission to build a generation of students who understand and create with Robotics & AI.",
    keywords: ["about Esdar", "robotics education company", "Esdar Technologies"],
  },
  blog: {
    title: "Blog — Robotics & AI in Education",
    description:
      "Insights, guides and stories on Robotics & AI in schools from the Esdar team — curriculum, labs, camps and the future of STEM education.",
    keywords: ["robotics education blog", "AI in education", "STEM blog"],
  },
  contact: {
    title: "Contact Esdar — Book a School Demo",
    description:
      "Talk to Esdar about bringing Robotics & AI to your school. Book a meeting, request a demo, or reach us at connect@esdar.in / +91 95090 64073.",
    keywords: ["contact Esdar", "book robotics demo", "robotics program enquiry"],
  },
  faq: {
    title: "FAQs — Robotics & AI Programs for Schools",
    description:
      "Answers to common questions about Esdar's Robotics & AI programs — lab setup vs camps, grades covered, equipment, instructors, curriculum and certificates.",
    keywords: ["robotics program FAQ", "school robotics questions", "Esdar FAQ"],
  },
};

// Build a Next.js Metadata object for a given page id.
export function buildMetadata(id) {
  const seo = PAGE_SEO[id];
  const path = HREF[id] || "/";
  const plainTitle =
    typeof seo.title === "string" ? seo.title : seo.title.absolute;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE.name,
      title: plainTitle,
      description: seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: plainTitle,
      description: seo.description,
    },
  };
}
