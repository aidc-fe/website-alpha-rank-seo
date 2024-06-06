import CommonDisplayCard from "./common-display-card";

export default function MarketInsight() {
  return (
    <div className={"flex gap-5"}>
      <CommonDisplayCard
        type="light"
        title={"Insight"}
        desc={
          "Competitive characteristics, competitive keywords, competitive crowd, what traffic "
        }
      ></CommonDisplayCard>

      <CommonDisplayCard
        type="dark"
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
