import CommonDisplayCard from "./common-display-card";
import Image from "next/image";

const InsightItems = [
  {
    text: "Industry Insights",
    className: "translate-x-[-36px] translate-y-[-255px]",
  },
  {
    text: "Target Audience",
    className: "translate-x-[58px] translate-y-[-213px]",
  },
  {
    text: "Branding Analysis",
    className: "translate-x-[-138px] translate-y-[-181px]",
  },
  {
    text: "Trending Topics",
    className: "translate-x-[-61px] translate-y-[-128px]",
  },
  {
    text: "SERP Content",
    className: "translate-x-[-20px] translate-y-[-56px]",
  },
  {
    text: "Blog Posts",
    className: "translate-x-[-158px] translate-y-[-30px]",
  },
  {
    text: "Titles & Descriptions",
    className: "translate-x-[-124px]",
  },
  {
    text: "Technical Issues",
    className: "translate-x-[-90px] translate-y-[62px]",
  },
];

const columns = ["Keywords", "KD"];
const data = [
  { keywords: "pet friendly furniture", kd: 18 },
  { keywords: "furniture covers for pets", kd: 23 },
  { keywords: "pet furniture covers", kd: 32 },
  { keywords: "pet furniture", kd: 32 },
  { keywords: "pet furniture protector", kd: 22 },
];

const columns1 = ["Topic"];
const data1 = [
  { topic: "Pet-friendly couches and sofas" },
  { topic: "Best Furniture For Pets Top Sellers" },
  { topic: "Pet-friendly sofa covers" },
  { topic: "15 Best Pet-Friendly Couches To Buy In 2024" },
  { topic: "Pet-Friendly Living Room Collections" },
];

export default function MarketInsight() {
  return (
    <div className={"flex gap-5 w-[1200px] h-[480px]"}>
      <CommonDisplayCard
        type="light"
        className="w-[386px] rounded-3xl shrink-0"
        innerClassName="relative bg-cover bg-[url('/market-insight-left-bg.webp')]"
        title={"Insight"}
        desc={
          "Competitive characteristics, competitive keywords, competitive crowd, what traffic "
        }
      >
        <>
          <div className="group absolute w-24 h-24 right-6 bottom-9 flex-1">
            {InsightItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`px-3 py-0.5 leading-7 text-sm transition duration-500 ease-in-out  bg-primary/10 font-bold text-[#805fff] rounded-full whitespace-nowrap absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2  ${item.className}`}
                >
                  {item.text}
                </div>
              );
            })}
          </div>
        </>
      </CommonDisplayCard>

      {/* <CommonDisplayCard type="dark">
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
                  className={`px-3 py-0.5 leading-7 text-sm transition duration-500 ease-in-out  bg-primary/10 font-bold text-primary rounded-full whitespace-nowrap absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 opacity-0 opacity-100 ${item.className}`}
                >
                  {item.text}
                </div>
              );
            })}
          </div>
        </>
      </CommonDisplayCard> */}
      <CommonDisplayCard
        className={
          "bg-display-card-primary-gradient flex-1 rounded-3xl overflow-hidden"
        }
        title={"Diagnostics & Scanning"}
        desc={
          "Competitive characteristics, competitive keywords, competitive crowd, what traffic "
        }
      >
        <div className="flex">
          <div className="relative shrink-0 top-[30px] p-4 bg-white rounded-xl w-[334px] h-[326px] shadow-table-gradient">
            <div className="text-sm font-bold text-title-color mb-3.5">
              Keywords Strategies
            </div>
            <table className="divide-y divide-gray-200 border-collapse">
              <thead className="bg-gray-100 rounded-t-lg">
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col}
                      className="rounded-t-lg px-3 py-1.5 text-xs font-medium text-gray-500"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, index) => (
                  <tr key={index}>
                    <td className="p-3 whitespace-nowrap text-sm text-gray-700">
                      {row.keywords}
                    </td>
                    <td className="p-3 whitespace-nowrap text-sm text-gray-700">
                      <div className="inline-block px-1.5 py-0.5 bg-yellow-100 rounded text-yellow-500 font-medium text-xs">
                        {row.kd}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="relative shrink-0 top-[12px] left-[-84px] p-4 bg-white rounded-xl w-[334px] h-[326px] shadow-table-gradient">
            <div className="text-sm font-bold text-title-color mb-3.5">
              Topics Research
            </div>
            <table className="min-w-full divide-y divide-gray-200 border-collapse">
              <thead className="bg-gray-100 rounded-t-lg">
                <tr>
                  {columns1.map((col) => (
                    <th
                      key={col}
                      className="rounded-t-lg px-3 py-1.5 text-xs font-medium text-gray-500"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data1.map((row, index) => (
                  <tr key={index}>
                    <td className="p-3 whitespace-nowrap text-sm text-gray-700">
                      <div>{row.topic}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col relative shrink-0 top-[30px] left-[-150px] p-4 bg-white rounded-xl w-[412px] h-[326px] shadow-table-gradient">
            <div className="capitalize text-sm font-bold text-title-color mb-3.5">
              Competitor Insights
            </div>
            <div className="flex gap-2 flex-grow">
              <div className="rounded-lg border border-gray-200 flex flex-col">
                <div className="px-4 rounded-t-lg text-xs font-medium text-gray-500 bg-gray-100 py-1.5">
                  keywords
                </div>
                <div className="flex flex-col px-1 py-2 justify-between flex-grow">
                  {[
                    "pet proof furniture",
                    "pet furniture cover",
                    "furniture and pets",
                    "pet kennel furniture",
                    "pets furniture",
                  ].map((item) => {
                    return (
                      <div
                        key={item}
                        className="whitespace-nowrap leading-5 px-4 py-2 text-gray-700 text-sm rounded-lg bg-primary/10"
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-fit rounded-lg border border-gray-200 flex flex-col">
                <div className="px-4 rounded-t-lg text-xs font-medium text-gray-500 bg-gray-100 py-1.5">
                  keywords
                </div>
                <div className="flex flex-col px-1 py-2 justify-between flex-grow">
                  {[
                    "how to keep pets off furniture",
                    "waterproof pet covers for furniture",
                    "best furniture pet hair remover",
                    "waterproof pet furniture covers for sectionals",
                    "ikea pet furniture",
                  ].map((item) => {
                    return (
                      <div
                        key={item}
                        className="whitespace-nowrap leading-5 px-4 py-2 text-gray-700 text-sm rounded-lg border border-gray-100"
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CommonDisplayCard>
    </div>
  );
}
