<template>
  <div>
    <h2>折线图</h2>
    <div class="chart" id="myChart1"></div>
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
      data = await $http({ url: "/two/data" })
    }

    onMounted(() => {
      let myChart = $echarts.init(document.getElementById("myChart1"))
      getState().then(() => {
        console.log("折线图", data)

        myChart.setOption({
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#e6b600",
              },
            },
          },
          grid: {
            top: "20%",
            left: "2%",
            bottom: "10%",
            containLabel: true,
          },
          legend: {
            data: ["服饰", "数码", "家电", "家具", "日化"],
            itemWidth: 12,
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
            data: data.data.chartData.chartData.day,
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
              type: "line",
              smooth: true,
              showSymbol: false,
              stack: "Total",
              lineStyle: {
                width: 0,
              },
              emphasis: {
                focus: "series",
              },
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#005eaa",
                  },
                  {
                    offset: 0.5,
                    color: "#339ca8",
                  },
                  {
                    offset: 1,
                    color: "#bca119",
                  },
                ]),
              },
              data: data.data.chartData.chartData.num.Chemicals,
            },
            {
              name: "数码",
              type: "line",
              //平滑曲线
              smooth: true,
              showSymbol: false,
              //堆叠
              stack: "Total",
              lineStyle: {
                width: 0,
              },
              //高亮
              emphasis: {
                focus: "series",
              },
              //填充
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#01cd89",
                  },
                  {
                    offset: 0.5,
                    color: "#339ca8",
                  },
                  {
                    offset: 1,
                    color: "#cba876",
                  },
                ]),
              },
              data: data.data.chartData.chartData.num.Clothes,
            },
            {
              name: "家电",
              type: "line",
              smooth: true,
              showSymbol: false,
              stack: "Total",
              lineStyle: {
                width: 0,
              },
              emphasis: {
                focus: "series",
              },
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#005eaa",
                  },
                  {
                    offset: 0.5,
                    color: "#339ca8",
                  },
                  {
                    offset: 1,
                    color: "#cda231",
                  },
                ]),
              },
              data: data.data.chartData.chartData.num.Electrical,
            },
            {
              name: "家具",
              type: "line",
              smooth: true,
              showSymbol: false,
              stack: "Total",
              lineStyle: {
                width: 0,
              },
              emphasis: {
                focus: "series",
              },
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#0eaa06",
                  },
                  {
                    offset: 0.5,
                    color: "#399ba3",
                  },
                  {
                    offset: 1,
                    color: "#cb3a6c",
                  },
                ]),
              },
              data: data.data.chartData.chartData.num.digit,
            },
            {
              name: "日化",
              type: "line",
              smooth: true,
              showSymbol: false,
              stack: "Total",
              lineStyle: {
                width: 0,
              },
              emphasis: {
                focus: "series",
              },
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#055aba",
                  },
                  {
                    offset: 0.5,
                    color: "#312ad2",
                  },
                  {
                    offset: 1,
                    color: "#cac349",
                  },
                ]),
              },
              data: data.data.chartData.chartData.num.gear,
            },
          ],
        })
      })
      window.addEventListener("resize", () => {
        setTimeout(() => {
          myChart.resize()
        }, 500)
      })
    })
    return { getState, data }
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
