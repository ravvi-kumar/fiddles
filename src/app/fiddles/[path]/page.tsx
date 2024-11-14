import CopyButton from "@/components/copy-button";
import { Node } from "@/types";
import fs from "node:fs";
import { BundledLanguage, codeToHtml } from "shiki";

export const dynamic = "force-static";
export async function generateStaticParams() {
  const filePaths: string[] = [];
  const readFolder = (dirPath: string): Node[] => {
    // Read all files and directories in the given directory
    const items = fs.readdirSync(`${process.cwd()}/${dirPath}`, {
      withFileTypes: true,
    });

    return items.map((item) => {
      const fullPath = dirPath + "/" + item.name;
      if (item.isDirectory()) {
        return {
          name: item.name,
          path: dirPath,
          fullPath: fullPath,
          nodes: readFolder(fullPath), // Recursively read the directory
        } as Node;
      } else {
        filePaths.push(dirPath + "/" + item.name);
        return {
          name: item.name,
          path: dirPath,
          fullPath: fullPath,
        };
      }
    });
  };

  readFolder("src/folders");
  console.log("filePaths", filePaths);

  return filePaths.map((file) => ({
    path: file.split("/").join("-"),
  }));
}

async function Page({ params }: { params: Promise<{ path: string }> }) {
  const path = (await params).path;

  console.log("path", path);

  const filePath = path.split("-").join("/");

  console.log("filePath", filePath);

  const text = fs.readFileSync(`${process.cwd()}/${filePath}`, "utf-8");

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
