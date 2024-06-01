<template>
  <div id="doughnutBox">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import Chart from "chart.js/auto";

// 创建一个 ref 用来引用 canvas 元素
const chartCanvas = ref(null);
let chartInstance = null;
// props 定义为函数，返回一个对象
const props = defineProps({
  phase: String,
});
// 监听 phase 变化
watch(props, (newValue, oldValue) => {
  updateChart(newValue.phase);
});

// 更新图表函数
const updateChart = (phase) => {
  const data = [
    { complete: 2010, count: calculatePercentage(phase) },
    { incomplete: 2010, count: 100 - calculatePercentage(phase) },
  ];

  // 更新 Chart.js 图表数据
  chartInstance.data.datasets[0].data = data.map((row) => row.count);
  chartInstance.update();
};

// 计算百分比函数
const calculatePercentage = (phase) => {
  switch (phase) {
    case "提案階段":
      return 25;
    case "設計階段":
      return 50;
    case "工程階段":
      return 75;
    default:
      return 0;
  }
};

// 在组件挂载时创建图表
onMounted(() => {
  // 初始化 Chart.js 图表
  chartInstance = new Chart(chartCanvas.value, {
    type: "doughnut", // 选择图表类型
    data: {
      labels: ["進度", "剩餘"], // 标签
      datasets: [
        {
          label: "專案完成度",
          data: [0, 100], // 初始化为 0% 和 100%
          backgroundColor: ["rgba(75, 192, 192, 0.2)", "#7c7c7c"], // 颜色
          borderColor: ["rgba(75, 192, 192, 1)", "#7c7c7c"], // 边框颜色
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "專案完成度",
        },
      },
    },
  });
});

// 在组件卸载时销毁图表
onUnmounted(() => {
  if (chartInstance) {
    chartInstance.destroy();
  }
});
</script>

<style scoped>
#doughnutBox {
  transform: scale(0.75);
}
</style>
