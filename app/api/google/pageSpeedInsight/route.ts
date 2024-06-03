import { NextRequest, NextResponse } from "next/server";

function formatForPageSpeed(url: string) {
  try {
    let formattedUrl = url.trim();

    // Prepend 'https://' if the URL doesn't start with 'http://' or 'https://'
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = "https://" + formattedUrl;
    }

    // Encode the URL
    formattedUrl = encodeURIComponent(formattedUrl);

    return formattedUrl;
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
}

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
    url: formatForPageSpeed(url!),
    category: "seo",
    strategy,
  });
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params.toString()}`;
  const res = await fetch(apiUrl, {});
  console.log(apiUrl);
  const data = await res.json();
  const { audits, categories, fullPageScreenshot } =
    data?.lighthouseResult ?? {};
  const { description, score, auditRefs } = categories?.seo ?? {};
  const list = auditRefs?.map((ref: { id: string }) => {
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
    data,
  });
}
