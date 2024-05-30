import { NextRequest, NextResponse } from "next/server";

const formatUrl = (rawUrl: string) => {
  const url = encodeURIComponent(rawUrl);
  if (!/^https?:\/\//i.test(url)) {
    return "https://" + url;
  } else {
    return url;
  }
};

export type PageSpeedInsightItemType = {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  weight: number;
  group: string;
};

/**
 *
 * @param request
 * searchParams: {
 *    url:string;
 *    strategy: "desktop" | "mobile"
 * }
 * @returns
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const strategy = searchParams.get("strategy") ?? "desktop";

  if (!url) {
    return NextResponse.json(
      { error: "URL parameter is missing" },
      { status: 400 }
    );
  }

  // 从环境变量中获取 API Key
  const apiKey = process.env.PAGE_SPEED_API_KEY ?? "";

  if (!apiKey) {
    return NextResponse.json({ error: "API key is missing" }, { status: 500 });
  }

  const params = new URLSearchParams({
    key: apiKey,
    url: formatUrl(url),
    category: "seo",
    strategy,
  });
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params.toString()}`;
  const res = await fetch(apiUrl, {});
  console.log(apiUrl, res);

  const data = await res.json();
  const { audits, categories, fullPageScreenshot } =
    data?.lighthouseResult ?? {};
  const { description, score, auditRefs } = categories?.seo ?? {};
  const list = auditRefs.map((ref: { id: string }) => {
    return {
      ...audits?.[ref.id],
      ...ref,
    };
  });

  return NextResponse.json({
    description,
    score,
    list,
    screenshot: fullPageScreenshot?.screenshot?.data,
  });
}
