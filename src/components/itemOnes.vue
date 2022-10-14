<template>
  <div>
    <h2>图表1</h2>
    <div class="chart" id="oneChart">图表容器</div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue"
export default {
  setup() {
    let $echarts = inject("echarts")
    let $http = inject("axios")

    let data = reactive({})
    let xData = reactive([])
    let yData = reactive([])

    function setData() {
      xData = data.data.chartData.chartData.map((v) => v.title)
      yData = data.data.chartData.chartData.map((v) => v.num)
      console.log("xdata", xData)
      console.log("ydata", yData)
    }
    //数据请求
    async function getState() {
      data = await $http({ url: "/one/data" })
      // console.log(oneData.data.chartData.chartData)
    }
    onMounted(() => {
      let myChart = $echarts.init(document.getElementById("oneChart"))
      getState().then(() => {
        setData()
        myChart.setOption({
          grid: {
            top: "4%",
            left: "1%",
            right: "6%",
            bottom: "4%",
            containLabel: true,
          },
          xAxis: {
            type: "value",
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
          },
          yAxis: {
            type: "category",
            data: xData,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
          },
          tooltip: {
            show: true,
          },
          series: [
            {
              data: yData,
              type: "bar",
              itemStyle: {
                normal: {
                  barBorderRadius: [0, 20, 20, 0],
                  color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
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
                      color: "#cda819",
                    },
                  ]),
                },
              },
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
    return {
      getState,
      data,
      xData,
      yData,
      setData,
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
