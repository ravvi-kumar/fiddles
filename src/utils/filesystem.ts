import { Node } from '@/types';
import { promises as fs } from 'node:fs';
import path from 'node:path';



export async function readFolder(dirPath: string): Promise<Node[]> {
  try {
    const absolutePath = path.join(process.cwd(), dirPath);
    const items = await fs.readdir(absolutePath, { withFileTypes: true });

    const nodes = await Promise.all(
      items.map(async (item) => {
        const fullPath = path.join(dirPath, item.name);
        const baseNode = {
          name: item.name,
          path: dirPath,
          fullPath,
        };

        if (item.isDirectory()) {
          return {
            ...baseNode,
            nodes: await readFolder(fullPath),
          };
        }
        
        return baseNode;
      })
    );

    return nodes;
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
    return [];
  }
}
