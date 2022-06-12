<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height" />
</template>

<script>
import { Bar } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: "bar-chart"
    },
    options: {
      plugins: {
        legend: {
          position: "right"
        },
        title: {
          display: true,
          text: "Chart.js Horizontal Bar Chart"
        }
      }
    },
    datasetIdKey: {
      type: String,
      default: "label"
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 77
    },
    cssClasses: {
      default: "",
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chartData: {
        labels: [
          "트리",
          "이분탐색",
          "해시",
          "구현",
          "정수론",
          "그래프 이론",
          "기하학"
        ],
        datasets: [
          {
            label: "내 위치",
            data: [40, 20, 12, 35, 27, 74, 22],

            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.6)"
          },
          {
            label: "사용자 상위 10% ",
            data: [80, 40, 92, 50, 79, 36, 69],
            borderColor: "rgb(54, 162, 235)",
            backgroundColor: "rgba(54, 162, 235, 0.6)"
          }
        ]
      },
      chartOptions: {
        responsive: true,
        indexAxis: "y",
        elements: {
          bar: {
            borderWidth: 2
          }
        }
      }
    };
  }
};
</script>
