<template>
  <div>
    <h2>库存统计</h2>
    <div class="chart" id="myChart"></div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue"
export default {
  setup() {
    let $http = inject("axios")
    let $echarts = inject("echarts")
    let data = reactive({})
    async function getState() {
      data = await $http({ url: "/three/data" })
    }

    onMounted(() => {
      let myChart = $echarts.init(document.getElementById("myChart"))
      getState().then(() => {
        console.log(data)

        myChart.setOption({
          legend: {
            top: "bottom",
            type: "scroll",
            orient: "horizontal",
            itemWidth: 14,
            itemHeight: 10,
          },
          tooltip: {
            show: true,
          },
          series: [
            {
              type: "pie",
              data: data.data.chartData.chartData,
              radius: [10, 70],
              center: ["50%", "45%"],
              roseType: "area",
              avoidLabelOverlap: true,
              itemStyle: {
                borderRadius: 5,
              },
            },
          ],
        })
        window.addEventListener("resize", () => {
          setTimeout(() => {
            myChart.resize()
          }, 500)
        })
      })
    })
    return {
      getState,
      data,
    }
  },
}
</script>

<style scoped>
.chart {
  height: 4.5rem;
}
h2 {
  height: 0.6rem;
  line-height: 0.6rem;
  color: #fff;
  font-size: 0.25rem;
  text-align: center;
}
</style>
