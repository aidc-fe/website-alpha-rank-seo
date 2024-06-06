import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import HoverGlowCard from "@/components/ui/hover-glow-card";
import { KEY_BLOCK, TRUSTED_ARR } from "@/constants/home";
import { cn } from "@/lib/utils";

const FadeTitle =
  "text-center text-transparent bg-clip-text bg-gradient-to-b from-white/100 to-white/50";

export default function Home() {
  return (
    <div className={"flex flex-col items-center pb-72 relative"}>
      <div></div>
      <h1 className={cn("text-6xl/normal font-black text-center", FadeTitle)}>
        AlphaRank: Elevating Content, Driving Traffic
      </h1>
      <h1
        className={
          "text-6xl font-black	text-center text-transparent bg-clip-text bg-main-gradient"
        }
      >
        Your Ultimate SEO Companion
      </h1>
      <div className={"opacity-40 text-xl mt-3"}>
        Beyond Content: AlphaRank, Where Traffic Thrives.
      </div>
      <div className={"flex flex-nowrap gap-2 mt-20"}>
        <Input
          placeholder="Enter a URL or keyword"
          className={"bg-white/10 w-80 h-10 rounded-[8px]"}
        />
        <Button size={"lg"} variant={"colorful"}>
          Get Free Trial
        </Button>
      </div>
      <iframe
        className="mt-14"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/cYjojaN3EOQ?si=ZZP1Rrx69s-zLKhC"
        title="[YouTube video player]How to Rank Higher: Shopify SEO with AlphaRank"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <h3 className={cn("text-3xl/10 mt-24 text-center font-bold", FadeTitle)}>
        Trusted by 15,000+ Content
        <br /> Creators,SEOs,Agencies,and Teams
      </h3>

      <ul className={"flex gap-14 mt-11 item-center"}>{TRUSTED_ARR}</ul>

      <ul className={"max-w-[1200px]"}>
        {KEY_BLOCK.map((item) => {
          const { icon, title, desc, Comp } = item;
          return (
            <li key={title} className="flex flex-col items-center mt-52">
              {icon}
              <h2 className={cn("text-5xl/normal font-bold", FadeTitle)}>
                {title}
              </h2>
              <div className="text-xl mb-12 opacity-50">{desc}</div>
              {Comp ? <Comp /> : <></>}
            </li>
          );
        })}
      </ul>

      <Button
        variant={"colorful"}
        className={"rounded-2xl h-20 px-12 text-3xl font-bold mt-52"}
      >
        Get Free Trial
      </Button>
    </div>
  );
}
