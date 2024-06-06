import CommonDisplayCard from "./common-display-card";

export default function SeoEnhancementBlock() {
  return (
    <div className="flex gap-5">
      <CommonDisplayCard
        type="light"
        desc="Competitive characteristics, competitive keywords"
        title="technical SEO"
      ></CommonDisplayCard>
      <CommonDisplayCard
        type="dark"
        desc="Competitive characteristics, competitive keywords"
        title="On-page SEO"
      ></CommonDisplayCard>
      <CommonDisplayCard
        desc="Competitive characteristics, competitive keywords"
        title="metadata"
      ></CommonDisplayCard>
    </div>
  );
}
