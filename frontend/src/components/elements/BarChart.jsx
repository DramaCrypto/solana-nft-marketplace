// import "./styles.css";

// Why do I have to import everything??
import {
  LineElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Price",
      backgroundColor: "#161616",
      data: [53, 162, 93, 131, 36, 93, 40],
      order: 2,
    },
    {
      label: "Sale",
      data: [31, 114, 65, 93, 21, 73, 25],
      borderColor: "#DDF247",
      borderWidth: 2,
      fill: false,
      // type: 'line',
      order: 1,
      zIndex: 2,
    },
  ],
};

const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        precision: 0,
        stepSize: 50,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      yAlign: "bottom",
      backgroundColor: "rgba(222, 232, 232, 0.20)",
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.value;
        },
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 20,
    },
  },
};

export default function BarChart() {
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}
