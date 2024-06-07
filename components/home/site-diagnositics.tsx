import { Check, LoaderCircle } from "lucide-react";
import GradientIcon from "../ui/gradient-icon";
import CommonDisplayCard from "./common-display-card";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function SiteDiagnostics() {
  return (
    <div className="grid grid-flow-row grid-cols-2 gap-5">
      <CommonDisplayCard
        type="dark"
        title={"网站检索"}
        desc="Competitive characteristics, competitive keywords"
      ></CommonDisplayCard>

      <CommonDisplayCard
        innerClassName="flex flex-col gap-2 pb-0"
        title={"Now it’s our turn"}
      >
        <>
          {TOP_RIGHT_DATA.map((item, ind) => {
            const { title, list } = item;
            return (
              <ul
                key={title}
                className={cn(
                  "flex flex-col text-sm border gap-3 border-white/10 bg-white/5 pl-14 pr-6 py-5 rounded-xl",
                  { "rounded-b-none border-b-0": ind === 1 }
                )}
              >
                <li className="flex gap-3 items-center font-medium ml-[-32px]">
                  <LoaderCircle size={20} className="animate-spin" />
                  <span>{title}</span>
                </li>
                {list.map((i, index) => {
                  const { label, score } = i;
                  return (
                    <li
                      className={cn(
                        "font-sm flex justify-between items-center",
                        {
                          "opacity-50": [1, 2].includes(index),
                          "opacity-25": index === 3,
                        }
                      )}
                      key={label}
                    >
                      <span>{label}</span>
                      {score === 100 ? (
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                          <Check size={14} strokeWidth={3} />
                        </div>
                      ) : (
                        <span>{score}%</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </>
      </CommonDisplayCard>

      <CommonDisplayCard
        className="col-span-2"
        innerClassName="pb-0 relative"
        title={"Lighthouse Scores"}
        desc="Out of the box, websites created are optimized for fast loading times, efficient use of resources, and a great user experience, leading to high scores on Google Lighthouse."
      >
        <div className="flex">
          <Image
            width={688}
            height={380}
            src="https://img.alicdn.com/imgextra/i2/O1CN01pNebRI1vyQoD0PHlf_!!6000000006241-49-tps-1398-744.webp"
            alt={"edgeShop img"}
            className={"mb-[-58px]"}
          />
          <CommonDisplayCard
            type="light"
            className="rounded-b-none z-10 absolute left-[660px] bottom-0 mr-4 h-72"
            innerClassName="grid grid-cols-3 pb-2 gap-2"
          >
            <>
              {BOTTOM_CARD_DATA.map((item) => {
                const { score, title, desc, list } = item;
                return (
                  <div key={title} className="flex flex-col gap-1 items-center">
                    <div
                      className={
                        "w-[80px] h-[80px] rounded-full bg-gradient-to-br from-[#3977FF] to-[#EE50D5] justify-center flex items-center"
                      }
                    >
                      <div className="border-white rounded-full w-[72px] h-[72px] border-4 font-black text-2xl justify-center flex items-center">
                        {score}
                      </div>
                    </div>
                    <div className="text-base text-[#191919] font-medium">
                      {title}
                    </div>
                    <div
                      className={"text-xs text-[#191919] text-center mb-2 h-8"}
                    >
                      {desc}
                    </div>
                    <ul
                      className={"text-[10px] text-primary flex flex-col gap-1"}
                    >
                      {list.map((i) => {
                        return <li key={i}>· {i}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </>
          </CommonDisplayCard>
        </div>
      </CommonDisplayCard>
    </div>
  );
}

const TOP_RIGHT_DATA = [
  {
    title: "Technical SEO 诊断……",
    list: [
      {
        label:
          'Has a tag containing widthorinitial-scale<meta name="viewport">',
        score: 100,
      },
      {
        label: "Content of blog need to be optimized",
        score: 82,
      },
      {
        label: "The document has a meta description",
        score: 72,
      },
      {
        label: "The document contains <title>elements",
        score: 21,
      },
    ],
  },
  {
    title: "On-page SEO 诊断……",
    list: [],
  },
];
const BOTTOM_CARD_DATA = [
  {
    score: 100,
    title: "SEO Perfomance",
    desc: "Refer to Google Search Essentials ",
    list: [
      "If Googlebot can find and access your page",
      "Not an error page",
      "Alt tags",
      "Mobile Friendliness",
    ],
  },
  {
    score: 95,
    title: "Content Quality",
    desc: "Refer to Google's EEAT evaluation",
    list: ["Keywords Density", "Length", "Images", "H1-H3 tags"],
  },
  {
    score: 99,
    title: "Keywords Quality",
    desc: "Refer to User Data",
    list: [
      "Search Volume/Keyword Competition/Relevance",
      "CTR/CVR",
      "HLanding Page Experience/Predictive Estimated CTR/Predictive Estimated CVR",
    ],
  },
];
