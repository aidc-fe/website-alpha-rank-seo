import CommonDisplayCard from "./common-display-card";
import Image from "next/image";

export default function TrafficAcceleratorBlock() {
  return (
    <Image
      width={1200}
      height={420}
      alt="traffic accelerator"
      src="https://img.alicdn.com/imgextra/i4/O1CN01iuy6Cx25Qfm22rscx_!!6000000007521-49-tps-2412-1070.webp"
    />
  );

  return (
    <div className={"grid grid-rows-2 grid-cols-3 gap-5"}>
      <CommonDisplayCard
        type="light"
        title={"discovery"}
        desc="Competitive characteristics, competitive keywords"
      />
      <CommonDisplayCard
        type="dark"
        className={"row-span-2"}
        title={"index"}
        desc="Competitive characteristics, competitive keywords…"
      ></CommonDisplayCard>
      <CommonDisplayCard
        className={"row-span-2"}
        title={"traffic"}
        desc="User Engagement Data - Impressions, Clicks, Avg. CTR, Duration Time, Visit Depth"
      ></CommonDisplayCard>
      <CommonDisplayCard
        desc="Competitive characteristics, competitive keywords"
        type="light"
        title={"Crawl"}
      />
    </div>
  );
}
