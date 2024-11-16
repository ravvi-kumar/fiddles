import { Node } from "@/types";

export function encodeFilePath(filePath: string): string {
  return filePath.split("/").join("__");
}

export function decodeFilePath(encodedPath: string): string {
  return encodedPath.split("__").join("/");
}

export function getAllFilePaths(nodes: Node[]): string[] {
  const paths: string[] = [];

  function traverse(node: Node) {
    if (!node.nodes) {
      paths.push(node.fullPath);
      return;
    }

    node.nodes.forEach(traverse);
  }

  nodes.forEach(traverse);
  return paths;
}
