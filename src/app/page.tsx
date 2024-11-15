import { FilesystemItem } from "@/components/filesystem-item";
import { readFolder } from "@/utils/filesystem";
import { Suspense } from "react";

async function FileTree() {
  const fileTree = await readFolder("src/folders");
  
  return (
    <ul>
      {fileTree.map((node) => (
        <FilesystemItem node={node} key={node.name} />
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="p-4 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <Suspense fallback={<div>Loading file system...</div>}>
        <FileTree />
      </Suspense>
    </main>
  );
}
