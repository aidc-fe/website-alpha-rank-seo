export default function ToolsCardList() {
  return (
    <ul className="grid grid-cols-3 gap-4 mt-12">
      {TOOL_LIST.map((tool) => {
        const { title, desc } = tool;
        return (
          <li
            key={title}
            className="px-5 py-8 flex flex-col gap-1 transition duration-200 w-96 border rounded-2xl hover:border-primary bg-white/5"
          >
            <div className={"font-bold text-xl"}>{title}</div>
            <div className="text-sm opacity-50">{desc}</div>
          </li>
        );
      })}
    </ul>
  );
}

const TOOL_LIST = [
  {
    title: "Site Audit",
    desc: "Identify and fix your website's SEO issues with our Site Audit. Pinpoint technical and on-page factors holding back your rankings in a straightforward analysis.",
  },
  {
    title: "Keyword Research",
    desc: "Unlock the power of over 100 million keywords from our extensive search intent database. Enjoy competitive insights to enhance your content's relevance and engagement. ",
  },
  { title: "url", desc: "url" },
  {
    title: "Content Generator",
    desc: "Effortlessly create SEO-driven content tailored to your needs. From blogs to product descriptions, our Content Generator crafts optimized content that attracts and converts.",
  },
];
