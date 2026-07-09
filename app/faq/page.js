import { readFileSync } from "fs";
import path from "path";
import { buildMetadata } from "@/app/lib/seo";
import { faqJsonLd, FAQ_ITEMS } from "@/app/lib/jsonld";

export const metadata = buildMetadata("faq");

export default function Page() {
  const html = readFileSync(
    path.join(process.cwd(), "app/lib/fragments/faq.html"),
    "utf8"
  );
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_ITEMS)) }}
      />
      <div className="page active" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
