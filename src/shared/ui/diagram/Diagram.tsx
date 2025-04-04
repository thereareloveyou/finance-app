import ReactECharts, { EChartsOption } from "echarts-for-react";
import { FC } from "react";

type DiagramTypes = {
  category: string;
  maximum: number;
  theme: string;
  spent: number;
};

export const Diagram: FC<{ budgets: DiagramTypes[] }> = ({ budgets }) => {
  const option: EChartsOption = {
    series: [
      {
        animation: false,
        type: "pie",
        radius: [100, "80%"],
        center: ["50%", "50%"],
        label: {
          show: false,
        },
        data: budgets.slice(0, 4).map((el) => ({
          value: el.maximum,
          name: el.category,
          itemStyle: { color: el.theme },
        })),
      },
    ],
  };

  const spent = budgets.reduce((acc, curr) => acc + curr.spent, 0);
  const budget = budgets.reduce((acc, curr) => acc + curr.maximum, 0);

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute">
        <div className="relative text-center">
          <span className="text-3xl text-grey-900 font-bold">${spent}</span>
          <br />
          <span className="text-xs text-grey-500">of ${budget} limit</span>
        </div>
      </div>
      <ReactECharts style={{ height: 200, width: 200 }} option={option} />
    </div>
  );
};
