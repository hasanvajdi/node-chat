import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const lineChartData = {
  labels: [],
  datasets: [
    {
      label: "Iteration",
      data: {
        1: 5,
        2: 9,
        3: 15,
        4: 60,
        5: 40,
        6: 15,
        7: 50,
        8: 90,
        9: 150,
        10: 5,
        11: 9,
        12: 15,
        13: 60,
        14: 40,
        15: 15,
        16: 50,
        17: 90,
        18: 150,
        19: 9,
        31: 15,
        20: 60,
        21: 40,
        22: 15,
        23: 50,
        24: 90,
        25: 150,
        26: 5,
        27: 9,
        28: 15,
        29: 60,
        30: 40,
      },
      borderColor: "#272829",
      backgroundColor: "rgba(39, 40, 41, 0.6)",
      borderWidth: 2,
      borderRadius: 3,
    },
  ],
};

function BarChart(props: any) {
  return (
    <Bar
      data={lineChartData}
      width="100%"
      height="100%"
      options={{ maintainAspectRatio: false }}
    />
  );
}

export default BarChart;
