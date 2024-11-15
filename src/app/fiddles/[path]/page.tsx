import CopyButton from "@/components/copy-button";
import { readFolder } from "@/utils/filesystem";
import { renderCode } from "@/utils/code-renderer";
import { decodeFilePath, encodeFilePath, getAllFilePaths } from "@/utils/path-utils";
import { Suspense } from "react";

export const dynamic = "force-static";

export async function generateStaticParams() {
  try {
    const fileTree = await readFolder("src/folders");
    const filePaths = getAllFilePaths(fileTree);
    
    return filePaths.map((file) => ({
      path: encodeFilePath(file),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

interface CodeViewerProps {
  code: string;
  text: string;
}

function CodeViewer({ code, text }: CodeViewerProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <CopyButton text={text} className="absolute top-2 right-12 z-10" />
      <div
        dangerouslySetInnerHTML={{ __html: code }}
        className="not-prose [&>*]:p-4 [&>*]:rounded-lg overflow-x-auto max-w-full [&_code]:whitespace-pre [&_code]:inline-block min-w-0 [&>pre]:!m-0"
      />
    </div>
  );
}

async function Page({ params }: { params: Promise<{ path: string }> }) {
  try {
    const path = (await params).path;
    const filePath = decodeFilePath(path);
    const { code, text } = await renderCode(filePath, { theme: 'nord' });

    return (
      <Suspense fallback={<div>Loading code...</div>}>
        <CodeViewer code={code} text={text} />
      </Suspense>
    );
  } catch (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-red-500">
        Failed to load code. Please try again later.
      </div>
    );
  }
}

export default Page;
