// import CopyButton from "@/components/copy-button";
// import fs from "fs/promises";
// import { BundledLanguage, codeToHtml } from "shiki";

async function Page({ params }: { params: Promise<{ path: string[] }> }) {
  const path = (await params).path;

  const filePath = path.join("/");

  // console.log("filePath", filePath);

  // const text = await fs.readFile(`${process.cwd()}/${filePath}`, "utf-8");

  // const lang = path.at(-1)?.split(".")[1];

  // const code = await codeToHtml(text, {
  //   lang: lang as BundledLanguage,
  //   theme: "nord",
  // });

  const pwd = process.cwd();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {JSON.stringify(filePath)}
      {JSON.stringify(path)}
      {JSON.stringify(pwd)}

      {/* <CopyButton text={text} className="absolute top-2 right-12" /> */}
      {/* <div
        dangerouslySetInnerHTML={{
          __html: code,
        }}
        className="not-prose [&>*]:p-4 [&>*]:rounded-lg"
      /> */}
    </div>
  );
}

export default Page;
