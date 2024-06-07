import { Logo_Icon } from "@/constants/home";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/shadcn/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/tooltip";

export default function Footer() {
  return (
    <footer className="grid grid-cols-7 gap-24 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-5 col-span-3">
        {Logo_Icon}
        <Link
          href={
            "https://www.producthunt.com/posts/alpharank?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-alpharank"
          }
          target="_blank"
        >
          <Image
            src="https://img.alicdn.com/imgextra/i4/O1CN01IKspuU1YBD4ikCXAe_!!6000000003020-2-tps-500-108.png"
            alt={"AlphaRank-productHunter"}
            width={250}
            height={54}
            className="rounded-[10px]"
          />
        </Link>

        <div className="flex items-center">
          {Social_Info.map((social) => {
            const { link, name, logo } = social;
            return (
              <TooltipProvider key={name}>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      className={
                        "w-9 h-9 transform duration-150 rounded-lg flex items-center justify-center hover:bg-primary/40"
                      }
                      target="_blank"
                      href={link}
                    >
                      {logo}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className={"capitalize"}>
                    {name}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>

        <div className="text-xl font-medium my-4">
          Your Ultimate One-Click Tool for Traffic Acquisition.
        </div>

        <div className={"opacity-50 text-base"}>
          © 2024 Vision-Edgeshop，inc.
        </div>
      </div>

      {Footer_Links.map((group) => {
        const { title, list } = group;
        return (
          <div key={title} className={"flex flex-col gap-5"}>
            <div className={"text-xl font-bold mb-2 capitalize"}>{title}</div>
            {list.map((item) => {
              const { label, link } = item;
              return (
                <Link
                  target="_blank"
                  key={label}
                  href={link}
                  className={"opacity-50 capitalize"}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        );
      })}
    </footer>
  );
}

const Footer_Links = [
  {
    title: "blog",
    list: [
      { label: "home", link: "" },
      { label: "F.A.Q", link: "" },
    ],
  },
  { title: "feature", list: [{ label: "home", link: "" }] },
  { title: "partner", list: [{ label: "home", link: "" }] },
  { title: "alphaRank", list: [{ label: "home", link: "" }] },
];

const Social_Info = [
  {
    name: "Twitter",
    logo: (
      <svg width="20px" height="18px" viewBox="0 0 20 18" version="1.1">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            transform="translate(-360, -10262)"
            fill="#FFFFFF"
            fillRule="nonzero"
          >
            <g transform="translate(0, 10104)">
              <g transform="translate(360, 158)">
                <path d="M15.751156,0 L18.8179669,0 L12.1179252,7.6246226 L20,18 L13.8283966,18 L8.99457655,11.7073774 L3.46357426,18 L0.394938117,18 L7.56129624,9.84461538 L0,0 L6.32828796,0 L10.6976385,5.75169231 L15.751156,0 Z M14.6748323,16.1723077 L16.3741787,16.1723077 L5.40488979,1.73169952 L3.58129954,1.73169952 L14.6748323,16.1723077 Z"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),
    link: "https://twitter.com/alpharank_seo",
  },
  {
    name: "Discord",
    logo: (
      <svg width="21px" height="16px" viewBox="0 0 21 16" version="1.1">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            transform="translate(-400, -10263)"
            fill="#FFFFFF"
            fillRule="nonzero"
          >
            <g transform="translate(0, 10104)">
              <g transform="translate(400, 159)">
                <path d="M17.8047364,1.35131387 C17.7988996,1.34000387 17.7892268,1.33114137 17.7774506,1.32631381 C16.415902,0.701620738 14.9790779,0.25616567 13.5029355,0.00109633791 C13.475429,-0.00401740827 13.4477435,0.00908386167 13.4342567,0.033596416 C13.2386061,0.388700471 13.0609987,0.753450834 12.902112,1.12645618 C11.3109111,0.88491338 9.69236732,0.88491338 8.10116646,1.12645618 C7.9412278,0.752503677 7.76077423,0.38766238 7.56062884,0.033596416 C7.54658036,0.00967027229 7.51932181,-0.00322227057 7.49191431,0.00109633791 C6.01561592,0.25563018 4.57869851,0.701118738 3.21732781,1.32634952 C3.20567394,1.33129007 3.19584065,1.33972572 3.18918486,1.35049244 C0.466710975,5.41614506 -0.279077369,9.38183316 0.086781064,13.298414 C0.0888605426,13.3178081 0.098719641,13.3355287 0.114102589,13.3475213 C1.6993739,14.5212931 3.47251905,15.4172421 5.35787108,15.9971348 C5.38506297,16.0052916 5.41445851,15.9956594 5.43154991,15.9729918 C5.83648263,15.4220191 6.19528343,14.8385877 6.50430369,14.2286305 C6.51289237,14.2117003 6.51382715,14.1919044 6.50687203,14.1742402 C6.49991691,14.156576 6.48573654,14.1427315 6.4679107,14.1362017 C5.90210805,13.9197132 5.354345,13.6587415 4.82976207,13.3557356 C4.81041006,13.3443592 4.79800164,13.3240856 4.79667545,13.3016766 C4.79534926,13.2792676 4.80527981,13.2576719 4.8231549,13.2440924 C4.93353983,13.1616388 5.0420095,13.0766518 5.14847748,12.989199 C5.16752458,12.9735114 5.19381498,12.9699691 5.21633486,12.9800561 C8.65309698,14.5485241 12.3738601,14.5485241 15.7699435,12.9800561 C15.792532,12.9693186 15.8192856,12.9725585 15.838658,12.9883775 C15.945247,13.0762927 16.053995,13.1615571 16.164802,13.2440924 C16.1827727,13.2575326 16.1928602,13.2790472 16.1916988,13.3014578 C16.1905374,13.3238684 16.17828,13.344225 16.1590163,13.3557356 C15.6356262,13.6612903 15.0873666,13.9220987 14.5200819,14.1353803 C14.5022648,14.1421605 14.488182,14.1562131 14.4813637,14.1740157 C14.4745454,14.1918183 14.4756379,14.2116831 14.4843675,14.2286305 C14.7985615,14.8351956 15.1568339,15.417892 15.5562999,15.9720276 C15.5729272,15.9953391 15.6025984,16.0054068 15.6299787,15.9970276 C17.5187092,15.419101 19.2949535,14.5230686 20.8822115,13.3475213 C20.8978464,13.3361107 20.9078032,13.3185138 20.909533,13.2992354 C21.3475346,8.77126026 20.1762447,4.83807224 17.8047364,1.35131387 L17.8047364,1.35131387 Z M7.0175555,10.9136226 C5.98283756,10.9136226 5.13026313,9.96408456 5.13026313,8.7979389 C5.13026313,7.63179324 5.96630179,6.68218382 7.0175555,6.68218382 C8.07702352,6.68218382 8.92134792,7.64004326 8.90481215,8.79786747 C8.90481215,9.96408456 8.06873777,10.9136226 7.0175555,10.9136226 L7.0175555,10.9136226 Z M13.9954372,10.9136226 C12.960755,10.9136226 12.1081806,9.96408456 12.1081806,8.7979389 C12.1081806,7.63179324 12.9442192,6.68218382 13.9954372,6.68218382 C15.0549767,6.68218382 15.8992654,7.64004326 15.8827296,8.79786747 C15.8827296,9.96408456 15.0549767,10.9136226 13.9954372,10.9136226 Z"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),
    link: "https://discord.gg/edgeshop",
  },
  {
    name: "Facebook",
    logo: (
      <svg width="20px" height="20px" viewBox="0 0 18 18" version="1.1">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            transform="translate(-442, -10262)"
            fill="#FFFFFF"
            fillRule="nonzero"
          >
            <g transform="translate(0, 10104)">
              <g transform="translate(442, 158)">
                <path d="M17.28,0 L0.72,0 C0.32175,0 0,0.32175 0,0.72 L0,17.28 C0,17.67825 0.32175,18 0.72,18 L17.28,18 C17.67825,18 18,17.67825 18,17.28 L18,0.72 C18,0.32175 17.67825,0 17.28,0 Z M15.201,5.25375 L13.76325,5.25375 C12.636,5.25375 12.41775,5.78925 12.41775,6.57675 L12.41775,8.3115 L15.10875,8.3115 L14.75775,11.02725 L12.41775,11.02725 L12.41775,18 L9.612,18 L9.612,11.0295 L7.26525,11.0295 L7.26525,8.3115 L9.612,8.3115 L9.612,6.309 C9.612,3.98475 11.03175,2.718 13.10625,2.718 C14.10075,2.718 14.9535,2.79225 15.20325,2.826 L15.20325,5.25375 L15.201,5.25375 Z"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),
    link: "https://www.facebook.com/profile.php?id=61554941481768",
  },
];
