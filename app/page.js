import { readFileSync } from "fs";
import path from "path";
import { buildMetadata } from "@/app/lib/seo";

export const metadata = buildMetadata("home");

export default function Page() {
  const html = readFileSync(
    path.join(process.cwd(), "app/lib/fragments/home.html"),
    "utf8"
  );
  return (
    <>
      <div className="page active" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
