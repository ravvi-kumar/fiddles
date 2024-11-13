import fs from "fs/promises";
import { createHighlighter, codeToHtml } from "shiki";

async function Page({ params }: { params: Promise<{ path: string[] }> }) {
  const path = (await params).path;
  const highlighter = await createHighlighter({
    themes: ["nord"],
    langs: ["typescript", "javascript", "jsx", "tsx", "markdown"],
  });

  const filePath = path.join("/");

  console.log("filePath", filePath);

  const text = await fs.readFile(`${process.cwd()}/${filePath}`, "utf-8");

  const code = await codeToHtml(text, {
    lang: "typescript",
    theme: "nord",
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        dangerouslySetInnerHTML={{
          __html: code,
        }}
        className="not-prose [&>*]:p-4 [&>*]:rounded-lg"
      ></div>
    </div>
  );
}

export default Page;
