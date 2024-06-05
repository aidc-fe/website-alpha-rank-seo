import CommonDisplayCard from "./common-display-card";

export default function SiteDiagnostics() {
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-5">
      <CommonDisplayCard
        className="bg-display-card-primary-gradient"
        title={"网站检索"}
        desc="Competitive characteristics, competitive keywords"
      ></CommonDisplayCard>
      <CommonDisplayCard
        className="border bg-white/5"
        title={"Now it’s our turn"}
      ></CommonDisplayCard>
      <CommonDisplayCard
        className="col-span-2 border bg-white/5"
        title={"Lighthouse Scores"}
        desc="Out of the box, websites created are optimized for fast loading times, efficient use of resources, and a great user experience, leading to high scores on Google Lighthouse."
      ></CommonDisplayCard>
    </div>
  );
}
