import CommonDisplayCard from "./common-display-card";

export default function SeoEnhancementBlock() {
  return (
    <div className="flex gap-5">
      <CommonDisplayCard
        className="bg-purple-100"
        desc="Competitive characteristics, competitive keywords"
        title="technical SEO"
      ></CommonDisplayCard>
      <CommonDisplayCard
        className="bg-display-card-primary-gradient"
        desc="Competitive characteristics, competitive keywords"
        title="On-page SEO"
      ></CommonDisplayCard>
      <CommonDisplayCard
        className="border bg-white/5"
        desc="Competitive characteristics, competitive keywords"
        title="metadata"
      ></CommonDisplayCard>
    </div>
  );
}
