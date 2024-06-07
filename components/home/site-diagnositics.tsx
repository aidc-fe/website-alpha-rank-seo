import { Check, LoaderCircle } from "lucide-react";
import GradientIcon from "../ui/gradient-icon";
import CommonDisplayCard from "./common-display-card";
import Image from "next/image";
import { cn } from "../../lib/utils";

export default function SiteDiagnostics() {
  return (
    <div className="grid grid-flow-row grid-cols-2 gap-5">
      <CommonDisplayCard
        type="dark"
        title={"Website Analytics"}
        desc="Branding Analysis, Competitive Insights, Industry Research, ..."
        innerClassName="relative"
      >
        <Image
          width={358}
          height={244}
          className="absolute b-0 left-1/2 -translate-x-1/2"
          alt={"Website Analytics Tree"}
          src="https://img.alicdn.com/imgextra/i4/O1CN01LBimlN1sgAACvrURQ_!!6000000005795-49-tps-728-492.webp"
        />
      </CommonDisplayCard>

      <CommonDisplayCard
        innerClassName="flex flex-col gap-2 pb-0"
        title={"SEO Evaluations"}
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
        title={"Quality Assessments"}
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
            className="rounded-b-none z-10 absolute left-[640px] bottom-0 mr-4 h-72 shadow"
            innerClassName="grid grid-cols-3 pb-2 gap-2"
          >
            <>
              {BOTTOM_CARD_DATA.map((item) => {
                const { score, title, list } = item;
                return (
                  <div key={title} className="flex flex-col gap-3 items-center">
                    <div
                      className={
                        "w-[80px] h-[80px] rounded-full bg-gradient-to-br from-[#3977FF] to-[#EE50D5] justify-center flex items-center"
                      }
                    >
                      <div className="border-white rounded-full w-[72px] h-[72px] border-4 font-black text-2xl justify-center flex items-center">
                        {score}
                      </div>
                    </div>
                    <div className="text-base text-[#191919] whitespace-nowrap font-medium">
                      {title}
                    </div>
                    <ul
                      className={
                        "text-xs text-primary mt-2 flex flex-col gap-1.5"
                      }
                    >
                      {list.map((i) => {
                        return (
                          <li className="whitespace-nowrap" key={i}>
                            · {i}
                          </li>
                        );
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
    title: "Technical SEO Health Checking...",
    list: [
      {
        label: "Robots.txt is effective",
        score: 100,
      },
      {
        label: "The page returned a valid HTTP status code",
        score: 82,
      },
      {
        label: "The document has a meta description ",
        score: 72,
      },
      {
        label: "Tag with width or initial-scale",
        score: 21,
      },
    ],
  },
  {
    title: "On-Page SEO Quality Reviewing...",
    list: [],
  },
];
const BOTTOM_CARD_DATA = [
  {
    score: 100,
    title: "SEO Perfomance",
    // desc: "Refer to Google Search Essentials ",
    list: [
      "Robots.txt is effective",
      "HTTP status code is valid",
      "Tag with width",
      "Tag with initial-scale",
    ],
  },
  {
    score: 95,
    title: "Content Quality",
    list: [
      "Content Relevance",
      "Enhanced Richness",
      "Keywords Density",
      "Adapted Images Display",
      "H1-H3 Tags",
    ],
  },
  {
    score: 99,
    title: "Keywords Strategies",
    list: [
      "Monthly Search Volume",
      "Competition Intensity",
      "Keywords Relevance",
      "User Engagement Data",
      "Landing Page Experience",
    ],
  },
];
