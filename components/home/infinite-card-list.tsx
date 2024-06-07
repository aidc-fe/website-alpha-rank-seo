"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsList() {
  return (
    <div className="relative flex gap-4">
      <div
        className={"absolute w-full h-28 bg-mask-gradient top-0 z-10"}
        style={{ "--direction": "bottom" } as React.CSSProperties}
      />
      <InfiniteMovingCards items={testimonials} />
      <InfiniteMovingCards items={testimonials} direction="down" />
      <InfiniteMovingCards items={testimonials} />
      <div
        className={"absolute w-full h-28 bg-mask-gradient bottom-0 z-10"}
        style={{ "--direction": "top" } as React.CSSProperties}
      />
    </div>
  );
}

const testimonials = [
  {
    avatar:
      "https://img.alicdn.com/imgextra/i2/O1CN01yog7YB1Dd3E7SM3iE_!!6000000000238-0-tps-1024-1024.jpg",
    quote:
      "The guidance from AlphaRank's SEO consultant has been pivotal in increasing traffic to my online store. It's like having an expert on call! ",
    name: "Oliver Smith",
    title: "Sales Manager",
  },
  {
    avatar:
      "https://img.alicdn.com/imgextra/i2/O1CN01L5zRnz1YiBbCFNN24_!!6000000003092-0-tps-1024-1024.jpg",
    quote:
      "The organic ranking improvements I've seen since using AlphaRank on my Shopify site have been phenomenal. Their AI SEO tools really work wonders.",
    name: "Charlotte Brown",
    title: "SEO Strategist",
  },
  {
    avatar:
      "https://img.alicdn.com/imgextra/i2/O1CN01QvwYEe22Klp0YuDf8_!!6000000007102-0-tps-1024-1024.jpg",
    quote:
      "This is the best SEO tool for Shopify users. AlphaRank's integration has made SEO management incredibly straightforward and effective. ",
    name: "James Wilson",
    title: "SEO Specialist",
  },
  {
    avatar:
      "https://img.alicdn.com/imgextra/i3/O1CN010um0UW28INRlPkiOX_!!6000000007909-0-tps-1024-1024.jpg",
    quote:
      "AlphaRank is not just a SEO tool, it's a comprehensive SEO solution specifically tailored for ecommerce success on Shopify. ",
    name: "Ethan Taylor",
    title: "SEO Manager",
  },
  {
    avatar:
      "https://img.alicdn.com/imgextra/i2/O1CN01pomPRp1ggpLlqfwJI_!!6000000004172-0-tps-1024-1024.jpg",
    quote:
      "With AlphaRank tool, I've seen a tangible improvement in my store's performance. Their website audit checklist is thorough and effective.",
    name: "Benjamin Clark",
    title: "SEO Coordinator",
  },
  {
    avatar:
      "https://img.alicdn.com/imgextra/i2/O1CN01YjNUNo1aXJQVkHPxu_!!6000000003339-0-tps-240-240.jpg",
    quote:
      "With AlphaRank, SEO visibility for my store has increased significantly. I can now easily compete with top brands in my niche. ",
    title: "SEO Executive",
    name: "Emma Thompson",
  },
  {
    avatar:
      "https://img.alicdn.com/imgextra/i2/O1CN016hdDed1rmHqNsspb5_!!6000000005673-0-tps-1024-1024.jpg",
    quote:
      "The AlphaRank SEO platform is revolutionary for small business SEO services. It's like having a top SEO company in your back pocket. ",
    title: "Content Strategist",
    name: "Sofia Rossi",
  },
  {
    avatar:
      "https://img.alicdn.com/imgextra/i3/O1CN01yAYFPn29Z9ZTqcffR_!!6000000008081-0-tps-1024-1024.jpg",
    quote:
      "AlphaRank provides more than just SEO tools; their SEO resources are incredibly informative, helping me stay on top of search algorithms. ",
    title: "Link Building Specialist",
    name: "Giorgia Ferrari",
  },
  {
    avatar:
      "https://img.alicdn.com/imgextra/i3/O1CN01vpio9F1logDV7TH7P_!!6000000004866-0-tps-1024-1024.jpg",
    quote:
      "Checking my Google ranking through AlphaRank's rank checker is a breeze. It's an essential tool for monitoring my SEO campaign. ",
    title: "Technical SEO Analyst",
    name: "Alessandro Romano",
  },
  {
    avatar:
      "https://img.alicdn.com/imgextra/i3/O1CN01DfHb631xQepej1yiR_!!6000000006438-0-tps-1106-1280.jpg",
    quote:
      "The Shopify SEO services offered by AlphaRank are unmatched. My store's SEO audit checklist ensured everything was optimized to perfection. ",
    title: "SEO Account Manager",
    name: "Luca Ricci",
  },
  {
    avatar:
      "https://img.alicdn.com/imgextra/i1/O1CN01GgePMY1x8nO6AON2K_!!6000000006399-0-tps-240-240.jpg",
    quote:
      "AlphaRank has bridged the gap between AI and SEO for my business, making complex SEO tasks more manageable than ever before. ",
    title: "Operation Manager",
    name: "Elena Conti",
  },
  {
    avatar:
      "https://img.alicdn.com/imgextra/i4/O1CN01jdx5Qh1IXcbr5hX9L_!!6000000000903-0-tps-240-240.jpg",
    quote:
      "As a blogger, AlphaRank's AI tools for writing have not only improved my SEO but also saved me countless hours. The best SEO rank tracker I've used to date. ",
    title: "SEO Strategist",
    name: "Giovanni Vitiello",
  },
];
