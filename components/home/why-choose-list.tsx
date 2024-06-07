import GradientIcon from "../ui/gradient-icon";

const WHY_CHOOSE_LIST = [
  {
    icon: "scrollText",
    title: "100M+",
    secTitle: "Search Intents",
    desc: "Tap into an expansive database of over 100 million keywords enriched with competitive insights to elevate content relevance and user engagement.",
  },
  {
    icon: "layers3",
    title: "300K+",
    secTitle: "Merchant Insights",
    desc: "Gain a competitive edge with deep insights from over 300,000 leading merchants, powering informed, strategically-driven SEO decisions.",
  },
  {
    icon: "scanSearch",
    title: "50%",
    secTitle: "Greater Precision",
    desc: "Elevate your SEO with AlphaRank's advanced algorithms and GPT-4 TURBO integration, enhancing semantic analysis precision by 50% for sharper keyword insights and tactics.",
  },
  {
    icon: "mousePointerClick",
    title: "1-Click",
    secTitle: "Efficiency",
    desc: "Master SEO effortlessly with one-click; our fully-managed service dramatically streamlines operations, boosting productivity and enabling a sharper focus on strategic objectives.",
  },
];

export function WhyChooseList() {
  return (
    <ul className="mt-16 flex  gap-12 px-6">
      {WHY_CHOOSE_LIST.map((item) => {
        const { icon, title, secTitle, desc } = item;
        return (
          <li key={secTitle} className={"flex-1 flex flex-col items-center"}>
            <GradientIcon name={icon} size={50} />
            <div className="font-black text-5xl mt-6">{title}</div>
            <div className="font-bold text-xl mt-2">{secTitle}</div>
            <div className={"opacity-50 mt-6"}>{desc}</div>
          </li>
        );
      })}
    </ul>
  );
}
