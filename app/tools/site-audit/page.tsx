// "use client";
import Gauge from "@/components/chart/gauge";
// import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import PageSpeedBlock from "./page-speed-block";

export default function SiteAudit() {
  const data = undefined;
  // const [data, setData] = useState<{
  //   mobile: PageSpeedType;
  //   desktop: PageSpeedType;
  // }>();

  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center px-4 h-full gap-12",
        {
          "pt-20": data,
        }
      )}
    >
      {/* <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={
          data
            ? {}
            : {
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }
        }
      > */}
      <div className="relative w-full flex flex-col gap-4 items-center justify-center px-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Site Audit
        </h1>
        <p className="leading-7 text-center">
          Identify your {`website's`} SEO issues with Site Audit, boosting your
          {`site's`} Google rankings and organic visibility.
          <br />
          Enhance your {`website's`}
          performance effortlessly.
        </p>
        {/* <PlaceholderCarouselInput
            placeholders={placeholders}
            onSubmit={onSubmit}
          /> */}
        <PageSpeedBlock />
        {/* </motion.div> */}
      </div>
    </div>
  );
}
