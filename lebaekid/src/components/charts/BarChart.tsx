import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

interface BarChartProps {
  sheetData: any;
}

const BarChart: React.FC<BarChartProps> = ({ sheetData }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );

  const options = {
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
      },
    },
  };
  const filteredData = sheetData.filter((row: any) => {
    return (row.P1 !== "" && row.P1 !== 0) || (row.P2 !== "" && row.P2 !== 0)  || (row.F !== "" && row.F !== 0)
  });

  console.log("Filtered Data:", filteredData);
  const labels = filteredData.map((row: any) => row?.Peserta);
  const P1Data = filteredData.map((row: any) => row?.P1);
  const P2Data = filteredData.map((row: any) => row?.P2);
  const FData = filteredData.map((row: any) => row?.F);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "P1",
        data: P1Data,
        backgroundColor: ["rgba(53, 162, 235, 0.5)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(53, 162, 235, 1)"],
        borderWidth: 1,
        skipNull: true,
      },
      {
        label: "P2",
        data: P2Data,
        backgroundColor: ["rgba(255, 99, 132, 0.5)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(53, 162, 235, 1)"],
        borderWidth: 1,
        skipNull: true,
      },
      {
        label: "Peserta Favorit",
        data: FData,
        backgroundColor: ["rgba(255, 99, 132, 0.5)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(53, 162, 235, 1)"],
        borderWidth: 1,
        skipNull: true,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;
