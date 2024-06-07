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
    text: "Titles",
    className: "translate-x-[-224px]",
  },
  {
    text: "Descriptions",
    className: "translate-x-[-90px] translate-y-[62px]",
  },
];

const columns = ["Keywords", "KD", "Address"];
const data = [
  { keywords: "John Brown", kd: 32, address: "New York" },
  { keywords: "Jim Green", kd: 42, address: "London" },
  { keywords: "Joe Black", kd: 32, address: "Sidney" },
  { keywords: "Joe Black", kd: 32, address: "Sidney" },
  { keywords: "Joe Black", kd: 32, address: "Sidney" },
];

const columns1 = ["No.", "Topic", "Address"];
const data1 = [
  { no: 1, topic: "Trending Topics Trending Topics", address: "New York" },
  { no: 2, topic: "Trending Topics Trending Topics", address: "London" },
  { no: 3, topic: "Trending Topics Trending Topics", address: "Sidney" },
  { no: 4, topic: "Trending Topics Trending Topics", address: "Sidney" },
  { no: 5, topic: "Trending Topics Trending Topics", address: "Sidney" },
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
                  className={`px-3 py-0.5 leading-7 text-sm transition duration-500 ease-in-out  bg-[rgba(111,80,232,0.1)] font-bold text-[#805fff] rounded-full whitespace-nowrap absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2  ${item.className}`}
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
                  className={`px-3 py-0.5 leading-7 text-sm transition duration-500 ease-in-out  bg-[rgba(111,80,232,0.1)] font-bold text-primary rounded-full whitespace-nowrap absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 opacity-0 opacity-100 ${item.className}`}
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
              Keywords Suggestion
            </div>
            <table className="min-w-full divide-y divide-gray-200 border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col}
                      className="px-3 py-1.5 leading-[18px] text-left text-xs font-medium text-gray-500 tracking-wider"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, index) => (
                  <tr key={index}>
                    <td className="p-3 whitespace-nowrap text-sm text-gray-900">
                      {row.keywords}
                    </td>
                    <td className="p-3 whitespace-nowrap text-sm text-gray-900">
                      <div className="inline-block px-1.5 py-0.5 bg-[#FFF3BF] rounded text-[#F59F00] text-xs">
                        {row.kd}
                      </div>
                    </td>
                    <td className="p-3 whitespace-nowrap text-sm text-gray-900">
                      {row.address}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="relative shrink-0 top-[12px] left-[-140px] p-4 bg-white rounded-xl w-[334px] h-[326px] shadow-table-gradient">
            <div className="text-sm font-bold text-title-color mb-3.5">
              Trending Topics
            </div>
            <table className="min-w-full divide-y divide-gray-200 border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  {columns1.map((col) => (
                    <th
                      key={col}
                      className="px-3 py-1.5 leading-[18px] text-left text-xs font-medium text-gray-500 tracking-wider"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data1.map((row, index) => (
                  <tr key={index}>
                    <td className="p-3 whitespace-nowrap text-sm text-gray-900">
                      {row.no}
                    </td>
                    <td className="p-3 whitespace-nowrap text-sm text-gray-900">
                      <div className="max-w-[150px] truncate ...">
                        {row.topic}
                      </div>
                    </td>
                    <td className="p-3 whitespace-nowrap text-sm text-gray-900">
                      {row.address}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="relative shrink-0 top-[30px] left-[-250px] p-4 bg-white rounded-xl w-[412px] h-[326px] shadow-table-gradient">
            <div className="text-sm font-bold text-title-color mb-3.5">
              Keywords comparison
            </div>
            <div className="flex justify-between">
              <div className="w-[182px] h-[262px] rounded-lg border border-[#F0F0F0]">
                <div className="flex py-3.5 px-4">
                  <Image
                    src="https://img.alicdn.com/imgextra/i3/O1CN01MP51ep1r5Ec6FZP1z_!!6000000005579-55-tps-18-18.svg"
                    width={18}
                    height={18}
                    alt=""
                  />
                  <div className="text-sm font-bold text-title-color ml-1">
                    Website A
                  </div>
                </div>
                <div className="px-4 text-xs font-medium text-gray-500 bg-gray-100 leading-7">
                  keywords
                </div>
                <div className="flex flex-col p-3.5 gap-1.5">
                  <div className="text-xs leading-5 px-4 py-2 text-neutral-800 rounded-lg bg-[rgba(111,80,232,0.12)]">
                    Transform
                  </div>
                  <div className="text-xs leading-5 px-4 py-2 text-neutral-800 rounded-lg bg-[rgba(111,80,232,0.12)]">
                    Transform
                  </div>
                  <div className="text-xs leading-5 px-4 py-2 text-neutral-800 rounded-lg bg-[rgba(111,80,232,0.12)]">
                    Transform
                  </div>
                  <div className="text-xs leading-5 px-4 py-2 text-neutral-800 rounded-lg bg-[rgba(111,80,232,0.12)]">
                    Transform
                  </div>
                </div>
              </div>
              <div className="w-[182px] h-[262px] rounded-lg border border-[#F0F0F0]">
                <div className="flex py-3.5 px-4">
                  <Image
                    src="https://img.alicdn.com/imgextra/i1/O1CN01AkOcHw1qmSNJrpiFb_!!6000000005538-55-tps-18-18.svg"
                    width={18}
                    height={18}
                    alt=""
                  />
                  <div className="text-sm font-bold text-title-color ml-1">
                    Website A
                  </div>
                </div>
                <div className="px-4 text-xs font-medium text-gray-500 bg-gray-100 leading-7">
                  keywords
                </div>
                <div className="flex flex-col p-3.5 gap-1.5">
                  <div className="text-xs leading-[18px] px-4 py-2 text-neutral-800 rounded-lg border border-[#F0F0F0]">
                    Transform
                  </div>
                  <div className="text-xs leading-[18px] px-4 py-2 text-neutral-800 rounded-lg border border-[#F0F0F0]">
                    Transform
                  </div>
                  <div className="text-xs leading-[18px] px-4 py-2 text-neutral-800 rounded-lg border border-[#F0F0F0]">
                    Transform
                  </div>
                  <div className="text-xs leading-[18px] px-4 py-2 text-neutral-800 rounded-lg border border-[#F0F0F0]">
                    Transform
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CommonDisplayCard>
    </div>
  );
}
