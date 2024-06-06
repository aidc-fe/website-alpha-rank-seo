import {
  ColumnDef,
} from "@tanstack/react-table";
import CommonDisplayCard from "./common-display-card";
import Image from "next/image";

const InsightItems = [
  {
    text: "Industry Insights",
    className:
      "translate-x-[-36px] translate-y-[-255px]",
  },
  {
    text: "Target Audience",
    className:
      "translate-x-[58px] translate-y-[-213px]",
  },
  {
    text: "Branding Analysis",
    className:
      "translate-x-[-138px] translate-y-[-181px]",
  },
  {
    text: "Trending Topics",
    className:
      "translate-x-[-61px] translate-y-[-128px]",
  },
  {
    text: "SERP Content",
    className:
      "translate-x-[-20px] translate-y-[-56px]",
  },
  {
    text: "Blog Posts",
    className:
      "translate-x-[-158px] translate-y-[-30px]",
  },
  {
    text: "Titles",
    className: "translate-x-[-224px]",
  },
  {
    text: "Descriptions",
    className: "translate-x-[-90px] translate-y-[62px]",
  },
];

const columns: ColumnDef<{ keywords: string; kd: number }>[] = [
  {
    accessorKey: "keywords",
    header: "Keywords",
    cell: ({ row }) => {
      return row.getValue("keywords");
    },
  },
  {
    accessorKey: "kd",
    header: "KD",
    cell: ({ row }) => {
      return row.getValue("kd");
    },
  },
];

const data = [
  {
    keywords: "test",
    kd: 0,
  },
];

export default function MarketInsight() {

  return (
    <div className={"flex gap-5 min-w-[1200px] h-[480px]"}>
      <CommonDisplayCard
        lightBg
        className="w-[386px] relative rounded-3xl"
        title={"Insight"}
        desc={
          "Competitive characteristics, competitive keywords, competitive crowd, what traffic "
        }
      >
        <>
          <Image
            width={386}
            height={480}
            src={
              "https://img.alicdn.com/imgextra/i2/O1CN01PwofcL1rZSkpSDiy8_!!6000000005645-55-tps-386-480.svg"
            }
            alt={"insight"}
            className="absolute top-0 left-0 right-0 bottom-0 z-[-1]"
          />
          <div className="group absolute w-24 h-24 right-6 bottom-9 flex-1">
            {InsightItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`px-3 py-0.5 leading-7 text-sm transition duration-500 ease-in-out  bg-[rgba(111,80,232,0.1)] font-bold text-primary rounded-full whitespace-nowrap absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 opacity-0 opacity-100 ${item.className}`}
                >
                  {item.text}
                </div>
              );
            })}
          </div>
        </>
      </CommonDisplayCard>
      <CommonDisplayCard
        className={"bg-display-card-primary-gradient flex-1 rounded-3xl"}
        title={"Diagnostics & Scanning"}
        desc={
          "Competitive characteristics, competitive keywords, competitive crowd, what traffic "
        }
      >
        <div>
        </div>
      </CommonDisplayCard>
    </div>
  );
}
