import CommonDisplayCard from "./common-display-card";

export default function MarketInsight() {
  return (
    <div className={"flex gap-5"}>
      <CommonDisplayCard
        lightBg
        className={"bg-purple-100"}
        title={"Insight"}
        desc={
          "Competitive characteristics, competitive keywords, competitive crowd, what traffic "
        }
      >
        <div></div>
      </CommonDisplayCard>
      <CommonDisplayCard
        className={"bg-display-card-primary-gradient"}
        title={"Diagnostics & Scanning"}
        desc={
          "Competitive characteristics, competitive keywords, competitive crowd, what traffic "
        }
      >
        <div></div>
      </CommonDisplayCard>
    </div>
  );
}
