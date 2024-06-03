"use client";

import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { handleGet } from "@/utils/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import type { PageSpeedInsightItemType } from "@/app/api/google/pageSpeedInsight/route";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/tabs";
import { DetailTable } from "./detail-table";

const queryClient = new QueryClient();

type PageSpeedType = {
  description: string;
  list: PageSpeedInsightItemType[];
  score: number;
  screenshot: string;
};

const queryPageSpeedInsight =
  (url: string, strategy: "mobile" | "desktop") => async () => {
    return await gapi.client?.pagespeedonline?.pagespeedapi?.runpagespeed({
      // category: "seo",
      strategy,
      url,
    });
  };

function DisplayBlock() {
  const [url, setUrl] = useState("");

  const {
    data: desktopData,
    error: desktopError,
    isLoading: desktopLoading,
    isError: desktopIsError,
    refetch: desktopRefetch,
  } = useQuery({
    queryKey: ["pageSpeed", "desktop"],
    queryFn: queryPageSpeedInsight(url, "desktop"),
    enabled: false,
  });
  const {
    data: mobileData,
    error: mobileError,
    isLoading: mobileLoading,
    isError: mobileIsError,
    refetch: mobileRefetch,
  } = useQuery({
    queryKey: ["pageSpeed", "mobile"],
    queryFn: queryPageSpeedInsight(url, "mobile"),
    enabled: false,
  });

  return (
    <>
      <div className="mt-3 flex w-full relative max-w-xl items-center space-x-2">
        <Input
          onChange={(val) => {
            setUrl(val.target.value);
          }}
          className={"pr-24"}
          placeholder="Enter your domain here"
        />
        <Button
          disabled={!url}
          loading={mobileLoading || desktopLoading}
          type="submit"
          className={"absolute right-0"}
          onClick={() => {
            console.log(111);
            desktopRefetch();
            mobileRefetch();
          }}
        >
          Analyze
        </Button>
      </div>

      <motion.div
        className={"flex flex-col w-full items-center"}
        initial={{ opacity: 0.0 }}
        whileInView={{ opacity: 1 }}
        // transition={
        //   data
        //     ? {}
        //     : {
        //         delay: 0.3,
        //         duration: 0.8,
        //         ease: "easeInOut",
        //       }
        // }
      >
        <Tabs
          defaultValue="mobile"
          className={"w-full flex flex-col items-center"}
        >
          <TabsList>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="desktop">Desktop</TabsTrigger>
          </TabsList>
          {[mobileData, desktopData].map((showData, index) => {
            const key = index === 0 ? "mobile" : "desktop";
            if (showData) {
              return (
                <TabsContent key={key} className={"w-full"} value={key}>
                  {JSON.stringify(showData)}
                  <div className={"flex flex-nowrap"}>
                    <div className={"basis-1/2"}>
                      {/* <Gauge value={showData.score * 100} name="SEO" /> */}
                    </div>
                  </div>
                  {/* <DetailTable className={"my-8 mx-3"} data={showData.list} /> */}
                </TabsContent>
              );
            }
          })}
        </Tabs>
      </motion.div>
    </>
  );
}

export default function PageSpeedBlock() {
  return (
    <QueryClientProvider client={queryClient}>
      <DisplayBlock />
    </QueryClientProvider>
  );
}
