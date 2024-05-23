// components/GaugeChart.tsx

import React from "react";
import dynamic from "next/dynamic";

// 使用 dynamic 导入 echarts-for-react 以确保在客户端渲染
const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

interface GaugeChartProps {
  value: number;
  name: string;
}

export const getColor = (score: number) => {
  if (score >= 80) return "#00c81f";
  if (score >= 50) return "#ffc108";
  return "#ff4d4d";
};
const GaugeChart: React.FC<GaugeChartProps> = ({ value, name }) => {
  const color = getColor(value);
  const backgroundColor = getColorWithAlpha(color, 0.16); // 透明度为 20%

  function getColorWithAlpha(hex: string, alpha: number) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  // ECharts 配置
  const options = {
    title: {
      subtext: name,
      subtextStyle: {
        fontWeight: "bold",
        fontSize: 16,
        align: "center",
        verticalAlign: "bottom",
        lineHeight: 30,
      },
      left: "center",
      bottom: 60,
    },
    tooltip: {
      formatter: "{a} <br/>{b} : {c}",
    },
    series: [
      {
        name,
        min: 0,
        max: 100,
        type: "gauge",
        progress: {
          show: true,
          width: 18,
          roundCap: true,
        },
        pointer: {
          icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
        },
        itemStyle: {
          color: color,
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 18,
            color: [[1, backgroundColor]],
          },
        },
        axisTick: {
          show: false, // 隐藏刻度
        },
        splitLine: {
          show: false, // 隐藏分割线
        },
        axisLabel: {
          show: false, // 隐藏标签
        },
        detail: {
          valueAnimation: true,
          formatter: "{value}",
          color: color,
        },
        data: [{ value }],
      },
    ],
  };

  return (
    <ReactECharts option={options} style={{ height: "400px", width: "100%" }} />
  );
};

export default GaugeChart;
