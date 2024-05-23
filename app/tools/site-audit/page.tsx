"use client";

import Gauge from "@/components/chart/gauge";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { AuditType } from "@/pages/api/lighthouse";
import { useState } from "react";
import { motion } from "framer-motion";
import cls from "classnames";
import FolderList from "@/components/ui/folder-list";
import { placeholders } from "./constants";

export default function SiteAudit() {
  const [data, setData] = useState<{
    seo: { score: number; metrics: AuditType[] };
    performance: { score: number; metrics: AuditType[] };
  }>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
  };
  const onSubmit = (value: string) => {
    fetch(`/api/lighthouse?url=${encodeURIComponent(value)}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setData(res);
      });
  };

  return (
    <div
      className={cls(
        "flex flex-col justify-center items-center px-4 overflow-auto min-h-screen",
        { "pt-20": data }
      )}
    >
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative w-full flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Site Audit
        </div>
        <div className="w-4/5 text-center font-extralight text-base md:text-2xl dark:text-neutral-200 py-4">
          Identify your website's SEO issues with Site Audit, boosting your
          site's Google rankings and organic visibility. Enhance your website's
          performance effortlessly.
        </div>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </motion.div>

      {data ? (
        <div className="flex w-full">
          <div className="w-1/2 p-2">
            <Gauge name="Performance" value={data.performance.score * 100} />
            <FolderList
              data={data.performance.metrics.map((item) => {
                const { title, id, description, displayValue, score } = item;
                return { title, id, description, displayValue, score };
              })}
            />
          </div>
          <div className="w-1/2 p-2">
            <Gauge name="SEO" value={data.seo.score * 100} />
            <FolderList
              data={data.seo.metrics.map((item) => {
                const { title, id, description, displayValue, score } = item;
                return { title, id, description, displayValue, score };
              })}
            />
          </div>
        </div>
      ) : (
        <></>
        // <FolderList
        //   data={mockData
        //     .filter((a) => ![undefined, null].includes(a.score))
        //     .sort((a, b) => a.score - b.score)}
        // />
      )}
    </div>
  );
}
