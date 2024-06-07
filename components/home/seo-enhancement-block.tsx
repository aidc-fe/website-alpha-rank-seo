"use client";

import CommonDisplayCard from "./common-display-card";
import { Button } from "@/components/shadcn/button";
import Image from "next/image";

const styles = {
  border: "double transparent",
  backgroundImage:
    "linear-gradient(#fff, #fff), linear-gradient(-80deg, #74ebff 0%, #3977ff 31%, #5c2fff 60%, #ee50d5 100%)",
  backgroundOrigin: "border-box",
  backgroundClip: "content-box, border-box",
};

export default function SeoEnhancementBlock() {
  return (
    <div className="flex gap-5">
      <CommonDisplayCard
        type="light"
        className="bg-card-main bg-[#EFEAFF] w-[386px] flex-shrink-0 overflow-hidden"
        desc="Competitive characteristics, competitive keywords"
        title="technical SEO"
      >
        <div className="relative">
          <Image
            width={346}
            height={412}
            className="absolute bottom-[-56px]"
            alt="technical seo left bg"
            src="https://img.alicdn.com/imgextra/i2/O1CN01kfmLnp1R8jd9vWSM0_!!6000000002067-49-tps-708-838.webp"
          />
          <Image
            width={82}
            height={82}
            alt="robot"
            className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="https://img.alicdn.com/imgextra/i1/O1CN01N9vjyw1nzn1HqoOD1_!!6000000005161-54-tps-228-272.apng"
          />

          <div className=" mt-16 relative z-10 flex flex-col gap-4 text-primary">
            <div className="overflow-hidden mx-[-20px]">
              <ul className="flex gap-4 flex-nowrap">
                <li className="px-3.5 py-2.5 leading-7 text-sm bg-primary/15 rounded-[14px] whitespace-nowrap">
                  Alternate page with proper canonical tag
                </li>
                <li className="px-3.5 py-2.5 leading-7 text-sm bg-primary/15 rounded-[14px] whitespace-nowrap">
                  Alternate page with proper canonical tag
                </li>
              </ul>
            </div>
            <div className="scroller overflow-hidden mx-[-20px]">
              <ul className="flex gap-4 flex-nowrap translate-x-4">
                <li className="px-3.5 py-2.5 leading-7 text-sm bg-primary/15 rounded-[14px] whitespace-nowrap">
                  Crawled - currently not indexed
                </li>
                <li className="px-3.5 py-2.5 leading-7 text-sm bg-primary/15 rounded-[14px] whitespace-nowrap">
                  Crawled - currently not indexed
                </li>
              </ul>
            </div>
            <div className="scroller overflow-hidden mx-[-20px]">
              <ul className="flex gap-[115px] flex-nowrap translate-x-[-146px]">
                <li className="px-3.5 py-2.5 leading-7 text-sm bg-primary/15 rounded-[14px] whitespace-nowrap">
                  Alternate page with proper canonical tag
                </li>
                <li className="px-3.5 py-2.5 leading-7 text-sm bg-primary/15 rounded-[14px] whitespace-nowrap">
                  Alternate page with proper canonical tag
                </li>
              </ul>
            </div>

            <div className="scroller overflow-hidden mx-[-20px]">
              <ul className="flex gap-4 flex-nowrap">
                <li className="px-3.5 py-2.5 leading-7 text-sm bg-primary/15 rounded-[14px] whitespace-nowrap">
                  {
                    'Has a tag containing widthorinitial-scale<meta name="viewport">'
                  }
                </li>
                <li className="px-3.5 py-2.5 leading-7 text-sm bg-primary/15 rounded-[14px] whitespace-nowrap">
                  Alternate page with proper canonical tag
                </li>
              </ul>
            </div>
            <div className="overflow-hidden mx-[-20px]">
              <ul className="flex gap-4 flex-nowrap translate-x-10">
                <li className="px-3.5 py-2.5 leading-7 text-sm bg-primary/15 rounded-[14px] whitespace-nowrap">
                  {"The document contains <title>elements"}
                </li>
                <li className="px-3.5 py-2.5 leading-7 text-sm bg-primary/15 rounded-[14px] whitespace-nowrap">
                  Alternate page with proper canonical tag
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CommonDisplayCard>
      <CommonDisplayCard
        type="dark"
        className="overflow-hidden relative flex-1 flex-shrink-0 w-[488px]"
        desc="Competitive characteristics, competitive keywords"
        title="On-page SEO"
      >
        <div className="flex-1 relative">
          <div className="absolute z-10 h-[148px] w-[338px] bg-white-50 backdrop-blur-custom-blur shadow-table-gradient rounded-[14px] p-3 top-0 right-0">
            <div className="text-xs text-primary font-bold">Write with AI</div>
            <div
              style={styles}
              className="mt-3.5 h-12 flex items-center text-xs font-medium text-second gap-2 rounded-lg"
            >
              <span className="ml-2.5">Create a blog based on the keyword</span>
              <input
                className="w-[60px] h-[30px] bg-[#f8f8f8] rounded-[4px] border border-[rgba(0,0,0,0.08)]"
                type="text"
              />
            </div>
            <div className="flex justify-end mt-2">
              <Button
                className="w-[90px] h-[28px] rounded-lg"
                variant={"colorful"}
              >
                Generate
              </Button>
            </div>
          </div>

          <div className="absolute top-0 w-[400px] h-[440px] bg-white rounded-t-[14px] pt-3.5 px-6 mt-[30px] text-[#141414] text-sm">
            <p className="font-bold">Blog Generator</p>
            <br />
            <p className="font-bold">
              {`Transform Your Furry Friend's Space: Expert Insights into the
              Best Pet Furniture Sales in the US`}
            </p>
            <Image
              className="my-2"
              width={330}
              height={184}
              src="https://img.alicdn.com/imgextra/i2/O1CN01zAM3js24rrfhSUycf_!!6000000007445-49-tps-330-184.webp"
              alt="img"
            />
            <p className="font-bold">Blog Generator</p>
            <p>Blog Generator</p>
          </div>
        </div>
      </CommonDisplayCard>
      <CommonDisplayCard
        type="light"
        className="border w-[285px] flex-shrink-0 overflow-hidden"
        desc="Competitive characteristics, competitive keywords"
        title="metadata"
      >
        <div className="flex-1 relative">
          <div className="absolute left-2.5 top-1.5 w-[282px] h-[384px] rounded-[20px] border-8 border-white-15">
            <div className="w-full h-full p-4 pr-[46px] bg-metadata-gradient rounded-[14px]">
              <div className="h-2 w-[186px] bg-[#E9E9E9] rounded"></div>
              <div className="h-2 w-[164px] bg-[#E9E9E9] rounded mt-3"></div>
              <div className="flex items-center mt-3 gap-2">
                <div className="w-6 h-6 rounded-full border-[#C3C3C3] border flex items-center justify-center">
                  <Image
                    width={15}
                    height={15}
                    alt="alpha-rank"
                    src="https://img.alicdn.com/imgextra/i1/O1CN010T4WOv1kED3JBbd9A_!!6000000004651-49-tps-64-64.webp"
                  ></Image>
                </div>
                <div className="flex flex-col">
                  <div className="text-xs text-third leading-4 font-semibold">
                    alpha-rank
                  </div>
                  <div className="text-xs text-second leading-4 ">
                    https://www.alpha-rank.com/
                  </div>
                </div>
              </div>
              <div className="text-sm text-[#6A21A9] line-clamp-2 mt-1 font-medium">
                Surge Rankings with AlphaRank: One-Click SEO AlphaRank:
                One-Click SEO
              </div>
              <p className="text-xs text-second font-medium mt-1">
                Harness a vast search intent database with over 100 million
                keywords, complete with competitive insights, for improved
                content relevance and engagement.
              </p>
              <div className="h-2 w-[186px] bg-[#E9E9E9] rounded mt-3"></div>
              <div className="h-2 w-[186px] bg-[#E9E9E9] rounded mt-3"></div>
              <div className="h-2 w-[164px] bg-[#E9E9E9] rounded mt-3"></div>
            </div>
          </div>
        </div>
      </CommonDisplayCard>
    </div>
  );
}
