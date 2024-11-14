import { FilesystemItem } from "@/components/filesystem-item";
import { Node } from "@/types";
import fs from "node:fs";

export default function Home() {
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
        return {
          name: item.name,
          path: dirPath,
          fullPath: fullPath,
        };
      }
    });
  };

  const fileTree = readFolder("src/folders");

  return (
    <main className="p-4 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <ul>
        {fileTree.map((node) => (
          <FilesystemItem node={node} key={node.name} />
        ))}
      </ul>
    </main>
  );
}
