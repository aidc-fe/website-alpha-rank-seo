import { DiamondPlus } from "lucide-react";
import GradientIcon from "../ui/gradient-icon";

export default function ToolsCardList() {
  return (
    <ul className="grid grid-cols-3 gap-4 mt-12">
      {TOOL_LIST.map((tool) => {
        const { title, desc, icon } = tool;
        return (
          <li
            key={title}
            className="px-5 py-8 flex flex-col gap-1 transition duration-200 w-96 border rounded-2xl hover:border-primary bg-white/5"
          >
            {/* <Icon
              strokeWidth={2}
              size={24}
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(157deg, #5543CF 0%, #AC52DD 96%)",
              }}
            /> */}

            <GradientIcon name={icon} />

            <div className={"font-bold text-xl mt-4"}>{title}</div>
            <div className="text-sm opacity-50">{desc}</div>
          </li>
        );
      })}
    </ul>
  );
}

const TOOL_LIST = [
  {
    icon: "clipboardPlus",
    title: "Site Audit",
    desc: "Identify and fix your website's SEO issues with our Site Audit. Pinpoint technical and on-page factors holding back your rankings in a straightforward analysis.",
  },
  {
    icon: "clipboardPenLine",
    title: "Keyword Research",
    desc: "Unlock the power of over 100 million keywords from our extensive search intent database. Enjoy competitive insights to enhance your content's relevance and engagement. ",
  },
  {
    icon: "clipboardCheck",
    title: "Content Generator",
    desc: "Effortlessly create SEO-driven content tailored to your needs. From blogs to product descriptions, our Content Generator crafts optimized content that attracts and converts.",
  },
];
