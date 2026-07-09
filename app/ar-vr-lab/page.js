import { readFileSync } from "fs";
import path from "path";
import { buildMetadata } from "@/app/lib/seo";

export const metadata = buildMetadata("arvrlab");

export default function Page() {
  const html = readFileSync(
    path.join(process.cwd(), "app/lib/fragments/arvrlab.html"),
    "utf8"
  );
  return (
    <>
      <div className="page active" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
