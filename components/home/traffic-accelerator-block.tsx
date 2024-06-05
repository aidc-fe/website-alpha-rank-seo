import CommonDisplayCard from "./common-display-card";

export default function TrafficAcceleratorBlock() {
  return (
    <div className={"grid grid-rows-2 grid-cols-3 gap-5"}>
      <CommonDisplayCard
        lightBg
        className={"bg-purple-50"}
        title={"discovery"}
        desc="Competitive characteristics, competitive keywords"
      />
      <CommonDisplayCard
        className={"row-span-2 bg-display-card-primary-gradient"}
        title={"index"}
        desc="Competitive characteristics, competitive keywords…"
      />
      <CommonDisplayCard
        className={"row-span-2 border bg-white/5"}
        title={"traffic"}
        desc="User Engagement Data - Impressions, Clicks, Avg. CTR, Duration Time, Visit Depth"
      ></CommonDisplayCard>
      <CommonDisplayCard
        lightBg
        desc="Competitive characteristics, competitive keywords"
        className="bg-purple-50"
        title={"Crawl"}
      />
    </div>
  );
}
