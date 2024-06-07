import { ALPHA_RANK_LISTING_URL, BLOG_PRODUCT_URL } from "@/constants/home";
import { ArrowUpRight, Goal } from "lucide-react";
import Link from "next/link";
import { Button } from "../shadcn/button";

const ROCKET_LIST = [
  {
    icon: (
      <svg width="321px" height="222px" viewBox="0 0 321 143" version="1.1">
        <defs>
          <linearGradient
            x1="14.6956872%"
            y1="15.7091046%"
            x2="88.1260258%"
            y2="87.2721319%"
            id="linearGradient-1"
          >
            <stop stopColor="#3977FF" stopOpacity="0" offset="0%"></stop>
            <stop stopColor="#6F2FFF" offset="47.5487469%"></stop>
            <stop stopColor="#A53DED" offset="78.8324725%"></stop>
            <stop stopColor="#EE50D5" offset="100%"></stop>
          </linearGradient>
          <circle
            id="path-rocket-1"
            cx="155.148704"
            cy="71.5689811"
            r="60"
          ></circle>
          <filter
            x="-21.7%"
            y="-21.7%"
            width="143.3%"
            height="143.3%"
            filterUnits="objectBoundingBox"
          >
            <feGaussianBlur
              stdDeviation="16"
              in="SourceAlpha"
              result="shadowBlurInner1"
            ></feGaussianBlur>
            <feOffset
              dx="-20"
              dy="-20"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.268856022 0"
              type="matrix"
              in="shadowInnerInner1"
            ></feColorMatrix>
          </filter>
          <linearGradient
            x1="61.1159703%"
            y1="-7.31755862%"
            x2="41.5832479%"
            y2="44.5142904%"
            id="linearGradient-4"
          >
            <stop stopColor="#F2F1FA" stopOpacity="0" offset="0%"></stop>
            <stop stopColor="#F2F1FA" offset="93%"></stop>
          </linearGradient>
          <radialGradient
            cx="48.2885659%"
            cy="0%"
            fx="48.2885659%"
            fy="0%"
            r="73.9655582%"
            gradientTransform="translate(0.4829, 0), scale(0.2006, 1), rotate(90), scale(1, 2.2084), translate(-0.4829, -0)"
            id="radialGradient-5"
          >
            <stop stopColor="#FFFFFF" stopOpacity="0" offset="0%"></stop>
            <stop
              stopColor="#FFFFFF"
              stopOpacity="0"
              offset="50.9002606%"
            ></stop>
            <stop stopColor="#FFFFFF" offset="100%"></stop>
          </radialGradient>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-398, -9165)">
            <g transform="translate(398.8513, 9165.431)">
              <g>
                <use
                  fillOpacity="0.6"
                  fill="url(#linearGradient-1)"
                  fillRule="evenodd"
                  xlinkHref="#path-rocket-1"
                ></use>
                <use
                  fill="black"
                  fillOpacity="1"
                  filter="url(#filter-3)"
                  xlinkHref="#path-rocket-1"
                ></use>
              </g>
              <g transform="translate(136.1487, 45.569)" fillRule="nonzero">
                <path
                  d="M26.8513261,26.6640782 L16.1467387,52 C16.1467387,52 -5.18771045,40.4126865 1.19008513,29.2644431 C1.3067299,29.0588951 1.42823487,28.857604 1.55460003,28.6660429 C1.5588527,28.656921 7.1438284,23.8903962 7.1438284,23.8903962 C15.5392139,20.4204051 26.8513261,26.6640782 26.8513261,26.6640782 Z"
                  fill="url(#linearGradient-4)"
                ></path>
                <path
                  d="M39,40.587828 C39,40.587828 33.3931534,34.685316 25.1690899,30.6442906 C18.4863168,27.3603873 7.87407323,23.8721523 1.55460003,28.6660429 C1.53698181,28.6453665 2.0703886,28.0226412 2.52238707,27.5853955 L35.1732011,0 L39,40.587828 Z"
                  fill="#FCFCFC"
                ></path>
              </g>
              <ellipse
                stroke="url(#radialGradient-5)"
                strokeWidth="2"
                transform="translate(159.8032, 71.0613) rotate(-15) translate(-159.8032, -71.0613)"
                cx="159.803155"
                cy="71.0612536"
                rx="156"
                ry="30.5"
              ></ellipse>
            </g>
          </g>
        </g>
      </svg>
    ),
    title: "Intelligent SEO Issues Audit & Auto-fix",
    desc: [
      "100-Score Guarantee: Ensuring your website achieves a full score of 100 in Google SEO.",
      "100% Automated Diagnostics: Conduct an in-depth check of your website, covering over 90% of common SEO issues.",
      "Above 30% Industry Levels: Average SEO scores exceeding industry standards by 30%, staying ahead of the curve.",
    ],
  },
  {
    icon: (
      <svg
        width="222px"
        height="222px"
        viewBox="0 0 222 222"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            x1="14.6956872%"
            y1="15.7091046%"
            x2="88.1260258%"
            y2="87.2721319%"
            id="linearGradient-1"
          >
            <stop stopColor="#3977FF" stopOpacity="0" offset="0%"></stop>
            <stop stopColor="#6F2FFF" offset="47.5487469%"></stop>
            <stop stopColor="#A53DED" offset="78.8324725%"></stop>
            <stop stopColor="#EE50D5" offset="100%"></stop>
          </linearGradient>
          <circle id="path-rocket-2" cx="113" cy="111" r="60"></circle>
          <filter
            x="-21.7%"
            y="-21.7%"
            width="143.3%"
            height="143.3%"
            filterUnits="objectBoundingBox"
            id="filter-3"
          >
            <feGaussianBlur
              stdDeviation="16"
              in="SourceAlpha"
              result="shadowBlurInner1"
            ></feGaussianBlur>
            <feOffset
              dx="-20"
              dy="-20"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.268856022 0"
              type="matrix"
              in="shadowInnerInner1"
            ></feColorMatrix>
          </filter>
          <linearGradient
            x1="61.1159703%"
            y1="-7.31755862%"
            x2="41.5832479%"
            y2="44.5142904%"
            id="linearGradient-4"
          >
            <stop stopColor="#F2F1FA" stopOpacity="0" offset="0%"></stop>
            <stop stopColor="#F2F1FA" offset="93%"></stop>
          </linearGradient>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-849, -9126)">
            <g transform="translate(849, 9126)">
              <g>
                <use
                  fillOpacity="0.6"
                  fill="url(#linearGradient-1)"
                  fillRule="evenodd"
                  xlinkHref="#path-rocket-2"
                ></use>
                <use
                  fill="black"
                  fillOpacity="1"
                  filter="url(#filter-3)"
                  xlinkHref="#path-rocket-2"
                ></use>
              </g>
              <g transform="translate(92, 85)" fillRule="nonzero">
                <path
                  d="M26.8513261,26.6640782 L16.1467387,52 C16.1467387,52 -5.18771045,40.4126865 1.19008513,29.2644431 C1.3067299,29.0588951 1.42823487,28.857604 1.55460003,28.6660429 C1.5588527,28.656921 7.1438284,23.8903962 7.1438284,23.8903962 C15.5392139,20.4204051 26.8513261,26.6640782 26.8513261,26.6640782 Z"
                  fill="url(#linearGradient-4)"
                ></path>
                <path
                  d="M39,40.587828 C39,40.587828 33.3931534,34.685316 25.1690899,30.6442906 C18.4863168,27.3603873 7.87407323,23.8721523 1.55460003,28.6660429 C1.53698181,28.6453665 2.0703886,28.0226412 2.52238707,27.5853955 L35.1732011,0 L39,40.587828 Z"
                  fill="#FCFCFC"
                ></path>
              </g>
              <circle
                stroke="#FFFFFF"
                strokeWidth="2"
                cx="111"
                cy="111"
                r="110"
              ></circle>
            </g>
          </g>
        </g>
      </svg>
    ),
    title: "SEO-Friendly Content Generation & Optimization",
    desc: [
      "10 Million+ User Intent Data: Precisely identify the intentions of a massive user base.",
      "100% Original Content: Boosting the indexing rate by more than 70%, leading by 50%+ over the industry average.",
    ],
  },
  {
    icon: (
      <svg width="260px" height="222px" viewBox="0 0 260 127" version="1.1">
        <defs>
          <linearGradient
            x1="14.6956872%"
            y1="15.7091046%"
            x2="88.1260258%"
            y2="87.2721319%"
            id="linearGradient-1"
          >
            <stop stopColor="#3977FF" stopOpacity="0" offset="0%"></stop>
            <stop stopColor="#6F2FFF" offset="47.5487469%"></stop>
            <stop stopColor="#A53DED" offset="78.8324725%"></stop>
            <stop stopColor="#EE50D5" offset="100%"></stop>
          </linearGradient>
          <circle
            id="path-rocket-3"
            cx="129.859454"
            cy="63.5378632"
            r="60"
          ></circle>
          <filter
            x="-21.7%"
            y="-21.7%"
            width="143.3%"
            height="143.3%"
            filterUnits="objectBoundingBox"
            id="filter-3"
          >
            <feGaussianBlur
              stdDeviation="16"
              in="SourceAlpha"
              result="shadowBlurInner1"
            ></feGaussianBlur>
            <feOffset
              dx="-20"
              dy="-20"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.268856022 0"
              type="matrix"
              in="shadowInnerInner1"
            ></feColorMatrix>
          </filter>
          <linearGradient
            x1="61.1159703%"
            y1="-7.31755862%"
            x2="41.5832479%"
            y2="44.5142904%"
            id="linearGradient-4"
          >
            <stop stopColor="#F2F1FA" stopOpacity="0" offset="0%"></stop>
            <stop stopColor="#F2F1FA" offset="93%"></stop>
          </linearGradient>
          <linearGradient
            x1="50%"
            y1="9.10271955%"
            x2="50%"
            y2="39.6299964%"
            id="linearGradient-5"
          >
            <stop stopColor="#FFFFFF" stopOpacity="0" offset="0%"></stop>
            <stop stopColor="#FFFFFF" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1236, -9173)">
            <g transform="translate(1236.1405, 9173.4621)">
              <g>
                <use
                  fillOpacity="0.6"
                  fill="url(#linearGradient-1)"
                  fillRule="evenodd"
                  xlinkHref="#path-rocket-3"
                ></use>
                <use
                  fill="black"
                  fillOpacity="1"
                  filter="url(#filter-3)"
                  xlinkHref="#path-rocket-3"
                ></use>
              </g>
              <g transform="translate(110.8595, 37.5379)" fillRule="nonzero">
                <path
                  d="M26.8513261,26.6640782 L16.1467387,52 C16.1467387,52 -5.18771045,40.4126865 1.19008513,29.2644431 C1.3067299,29.0588951 1.42823487,28.857604 1.55460003,28.6660429 C1.5588527,28.656921 7.1438284,23.8903962 7.1438284,23.8903962 C15.5392139,20.4204051 26.8513261,26.6640782 26.8513261,26.6640782 Z"
                  fill="url(#linearGradient-4)"
                ></path>
                <path
                  d="M39,40.587828 C39,40.587828 33.3931534,34.685316 25.1690899,30.6442906 C18.4863168,27.3603873 7.87407323,23.8721523 1.55460003,28.6660429 C1.53698181,28.6453665 2.0703886,28.0226412 2.52238707,27.5853955 L35.1732011,0 L39,40.587828 Z"
                  fill="#FCFCFC"
                ></path>
              </g>
              <ellipse
                stroke="url(#linearGradient-5)"
                strokeWidth="2"
                transform="translate(129.8595, 63.0379) scale(-1, 1) rotate(-15) translate(-129.8595, -63.0379)"
                cx="129.859454"
                cy="63.0378632"
                rx="125"
                ry="30.5"
              ></ellipse>
            </g>
          </g>
        </g>
      </svg>
    ),
    title: "Real-Time Keywords Ranking Monitor & Boost",
    desc: [
      "24/7 Keyword Monitoring: The system tracks core keyword rankings around the clock, updated hourly.",
      "Top-10 Assurance: 80% of core keywords firmly rank on Google's first page, enhancing brand visibility.",
      "Competitive Analysis: In-depth analysis of competitors' ranking strategies, staying far ahead.",
    ],
  },
];

export function RocketList() {
  return (
    <div className="flex flex-col items-center">
      <ul className="mt-16 grid grid-cols-3 gap-20 px-8">
        {ROCKET_LIST.map((item) => {
          const { title, desc, icon } = item;
          return (
            <li key={title} className={"flex flex-col items-center"}>
              {icon}
              <Button
                variant={"link"}
                className={"text-white whitespace-normal h-fit"}
              >
                <Link
                  href={BLOG_PRODUCT_URL}
                  target="_blank"
                  className="font-semibold text-xl mt-6 capitalize group"
                >
                  <span>{title}</span>
                  <ArrowUpRight className="shrink-0 inline group-hover:text-purple-400" />
                </Link>
              </Button>

              <ul className={"mt-4 flex flex-col gap-2"}>
                {desc.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Goal size={20} className="text-purple-400 shrink-0" />
                    <span className="opacity-50">{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
      <Button
        variant={"colorful"}
        className={"rounded-2xl h-20 px-12 text-3xl mt-12 font-bold"}
      >
        <Link
          className="w-full h-full flex justify-center items-center"
          target="_blank"
          href={ALPHA_RANK_LISTING_URL}
        >
          Get Free Trial
        </Link>
      </Button>
    </div>
  );
}
