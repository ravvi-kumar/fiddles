import { Node } from "@/types";

export function encodeFilePath(filePath: string): string {
  return filePath.split('/').join('-');
}

export function decodeFilePath(encodedPath: string): string {
  return encodedPath.split('-').join('/');
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