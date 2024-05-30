"use client";

import Gauge from "@/components/chart/gauge";
import { PlaceholderCarouselInput } from "@/components/ui/placeholder-carousel-input";
import type { PageSpeedInsightItemType } from "@/app/api/google/pageSpeedInsight/route";
import { useState } from "react";
import { motion } from "framer-motion";
import { placeholders } from "./constants";
import { cn } from "@/utils/cn";
import { handleGet } from "@/utils/utils";
import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/tabs";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { DetailTable } from "./detailTable";

type PageSpeedType = {
  description: string;
  list: PageSpeedInsightItemType[];
  score: number;
  screenshot: string;
};
export default function SiteAudit() {
  const [data, setData] = useState<{
    mobile: PageSpeedType;
    desktop: PageSpeedType;
  }>();

  const onSubmit = (url: string) => {
    return Promise.all([
      handleGet(`/api/google/pageSpeedInsight`, { url, strategy: "mobile" }),
      handleGet(`/api/google/pageSpeedInsight`, { url }),
    ]).then((res) => {
      setData({ mobile: res[0], desktop: res[1] });
      // saveDataToFile(
      //   { mobile: res[0], desktop: res[1] },
      //   "/app/tools/site-audit/mock.json"
      // );
    });
  };

  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center px-4 h-full gap-12",
        {
          "pt-20": data,
        }
      )}
    >
      <motion.div
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
        className="relative w-full flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Site Audit
        </div>
        <div className="w-4/5 text-center font-extralight text-base md:text-2xl dark:text-neutral-200 py-4">
          {`Identify your website's SEO issues with Site Audit, boosting your
          site's Google rankings and organic visibility. Enhance your website's
          performance effortlessly.`}
        </div>
        <PlaceholderCarouselInput
          placeholders={placeholders}
          onSubmit={onSubmit}
        />
      </motion.div>

      {data ? (
        <motion.div
          className={"flex flex-col w-full items-center"}
          initial={{ opacity: 0.0 }}
          whileInView={{ opacity: 1 }}
          transition={
            data
              ? {}
              : {
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }
          }
        >
          <Tabs
            defaultValue="mobile"
            className={"w-full flex flex-col items-center"}
          >
            <TabsList>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="desktop">Desktop</TabsTrigger>
            </TabsList>
            {["mobile", "desktop"].map((type) => {
              const showData: PageSpeedType = data[type];
              return (
                <TabsContent key={type} className={"w-full"} value={type}>
                  <div className={"flex flex-nowrap"}>
                    <div className={"basis-1/2"}>
                      <Gauge value={showData.score * 100} name="SEO" />
                    </div>
                    <ScrollArea
                      className={
                        "basis-1/2 h-[400px] overflow-auto text-center flex justify-center pt-4"
                      }
                    >
                      <div className="relative h-[400px]">
                        <Image
                          src={showData.screenshot}
                          alt="pageSpeedInsight image"
                          width={300}
                          height={400}
                          layout="intrinsic"
                          className="object-contain"
                        />
                      </div>
                    </ScrollArea>
                  </div>
                  <DetailTable className={"my-8 mx-3"} data={showData.list} />
                </TabsContent>
              );
            })}
            {/* <TabsContent className={"w-full"} value="mobile">
              <Gauge value={data.mobile.score * 100} name="SEO" />
            </TabsContent> */}
          </Tabs>
        </motion.div>
      ) : (
        <></>
      )}
    </div>
  );
}
