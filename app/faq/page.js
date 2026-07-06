import { readFileSync } from "fs";
import path from "path";

export default function Page() {
  const html = readFileSync(
    path.join(process.cwd(), "app/lib/fragments/faq.html"),
    "utf8"
  );
  return <div className="page active" dangerouslySetInnerHTML={{ __html: html }} />;
}
