import CopyButton from "@/components/copy-button";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import fs from "fs/promises";
import { createHighlighter, codeToHtml, BundledLanguage } from "shiki";

async function Page({ params }: { params: Promise<{ path: string[] }> }) {
  const path = (await params).path;
  const highlighter = await createHighlighter({
    themes: ["nord"],
    langs: ["typescript", "javascript", "jsx", "tsx", "markdown"],
  });

  const filePath = path.join("/");

  console.log("filePath", filePath);

  const text = await fs.readFile(`${process.cwd()}/${filePath}`, "utf-8");

  const lang = path.at(-1)?.split(".")[1];

  const code = await codeToHtml(text, {
    lang: lang as BundledLanguage,
    theme: "nord",
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <CopyButton text={text} className="absolute top-2 right-12" />
      <div
        dangerouslySetInnerHTML={{
          __html: code,
        }}
        className="not-prose [&>*]:p-4 [&>*]:rounded-lg"
      />
    </div>
  );
}

export default Page;
