import { File, Folder, Tree, TreeViewElement } from "@/components/ui/file-tree";
import { readFolder } from "@/utils/filesystem";
import { Suspense } from "react";
import Link from "next/link";
import { Node } from "@/types";

// Convert Node to TreeViewElement
function convertNodeToTreeElement(node: Node): TreeViewElement {
  return {
    id: node.fullPath,
    name: node.name,
    isSelectable: !node.nodes, // Files are selectable, folders are not
    children: node.nodes ? node.nodes.map(convertNodeToTreeElement) : undefined,
  };
}

// Render tree elements recursively
function renderTreeElements(elements: TreeViewElement[]) {
  return elements.map((element) => {
    if (element.children && element.children.length > 0) {
      return (
        <Folder key={element.id} value={element.id} element={element.name}>
          {renderTreeElements(element.children)}
        </Folder>
      );
    } else {
      return (
        <File key={element.id} value={element.id}>
          <Link 
            href={`/fiddles/${element.id.split("/").join("__")}`}
            className="flex items-center gap-2"
          >
            {element.name}
          </Link>
        </File>
      );
    }
  });
}

async function FileTree() {
  const fileTree = await readFolder("src/folders");
  const treeElements = fileTree.map(convertNodeToTreeElement);
  
  return (
    <Tree elements={treeElements}>
      {renderTreeElements(treeElements)}
    </Tree>
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
