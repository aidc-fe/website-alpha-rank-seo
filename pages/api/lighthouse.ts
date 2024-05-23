// pages/api/lighthouse.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const formatUrl = (url: string) => {
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }
  return url;
};

export type AuditType = {
  group: string;
  weight: number;
  title: string;
  id: string;
  description: string;
  displayValue: string;
  score: number;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "URL is required" });
  }

  const formattedUrl = formatUrl(url);

  try {
    const { stdout, stderr } = await execAsync(
      `lighthouse ${formattedUrl} --output=json --quiet`
    );

    if (stderr) {
      return res.status(500).json({ error: stderr });
    }

    const lighthouseResult = JSON.parse(stdout);
    const { categories, audits } = lighthouseResult;

    const { seo, performance } = categories ?? {};
    const { score: seoScore, auditRefs: seoAudits } = seo ?? {};
    const { score: performanceScore, auditRefs: performanceAudits } =
      performance ?? {};

    const seoMetrics = seoAudits.map((audit: AuditType) => {
      return { ...audits?.[audit.id], ...audit };
    });
    const performanceMetrics = performanceAudits.map(
      (audit: AuditType) => audits?.[audit.id]
    );

    return res.status(200).json({
      seo: {
        score: seoScore.toFixed(2),
        metrics: seoMetrics
          .filter((a) => ![undefined, null].includes(a.score))
          .sort((a, b) => a.score - b.score),
      },
      performance: {
        score: performanceScore.toFixed(2),
        metrics: performanceMetrics
          .filter((a) => ![undefined, null].includes(a.score))
          .sort((a, b) => a.score - b.score),
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
