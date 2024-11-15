import { promises as fs } from 'node:fs';
import path from 'node:path';
import { BundledLanguage, codeToHtml } from 'shiki';

export interface CodeRenderOptions {
  theme?: string;
}

export async function renderCode(filePath: string, options: CodeRenderOptions = {}) {
  try {
    const absolutePath = path.join(process.cwd(), filePath);
    const text = await fs.readFile(absolutePath, 'utf-8');
    const extension = path.extname(filePath).slice(1);
    
    const code = await codeToHtml(text, {
      lang: extension as BundledLanguage,
      theme: options.theme || 'nord',
    });

    return { code, text };
  } catch (error) {
    console.error(`Error rendering code for ${filePath}:`, error);
    throw new Error(`Failed to render code for ${filePath}`);
  }
}
