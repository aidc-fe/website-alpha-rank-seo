import { NextResponse, NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  const { data, fPath } = await request.json();

  // 确定文件路径
  const filePath = path.join(process.cwd(), fPath);

  try {
    // 将数据写入文件
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    return NextResponse.json({ message: "Data saved successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to write file" },
      { status: 500 }
    );
  }
}
