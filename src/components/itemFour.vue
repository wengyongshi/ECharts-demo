<template>
  <div>
    <h2>堆叠图</h2>
    <div class="chart" id="myChart2"></div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue"
export default {
  setup() {
    let $echarts = inject("echarts")
    let $http = inject("axios")
    let data = reactive({})
    async function getState() {
      data = await $http({ url: "/four/data" })
    }
    onMounted(() => {
      let myChart = $echarts.init(document.getElementById("myChart2"))
      getState().then(() => {
        console.log("堆叠图", data)

        myChart.setOption({
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          grid: {
            top: "15%",
            left: "2%",
            bottom: "10%",
            containLabel: true,
          },
          legend: {
            itemWidth: 12,
          },
          xAxis: {
            type: "category",
            data: data.data.chartData.chartData.day,
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          yAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          series: [
            {
              name: "服饰",
              type: "bar",
              data: data.data.chartData.chartData.num.Chemicals,
              stack: "total",
              label: {
                show: "true",
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "数码",
              type: "bar",
              data: data.data.chartData.chartData.num.Clothes,
              stack: "total",
              label: {
                show: "true",
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "家电",
              type: "bar",
              data: data.data.chartData.chartData.num.Electrical,
              stack: "total",
              label: {
                show: "true",
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "家具",
              type: "bar",
              data: data.data.chartData.chartData.num.digit,
              stack: "total",
              label: {
                show: "true",
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "日化",
              type: "bar",
              data: data.data.chartData.chartData.num.gear,
              stack: "total",
              label: {
                show: "true",
              },
              emphasis: {
                focus: "series",
              },
            },
          ],
        })
      })
      window.addEventListener("resize", () => {
        console.log("resize")
        setTimeout(() => {
          myChart.resize()
        }, 500)
      })
    })

    return { data, getState }
  },
}
</script>

<style>
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
