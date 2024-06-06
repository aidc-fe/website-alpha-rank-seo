import CommonDisplayCard from "./common-display-card";
import Star1 from "./assets/star1.webp";

export default function TrafficAcceleratorBlock() {
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
