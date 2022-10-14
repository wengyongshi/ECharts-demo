<template>
  <div>
    <header>
      <h1>数据可视化</h1>
    </header>
    <section class="container">
      <div class="leftItem">
        <ItemPage>
          <ItemOnes></ItemOnes>
        </ItemPage>
        <ItemPage>
          <ItemTwo></ItemTwo>
        </ItemPage>
      </div>
      <div class="centerItem">
        <MapPage></MapPage>
      </div>
      <div class="rightItem">
        <ItemPage>
          <ItemThree></ItemThree>
        </ItemPage>
        <ItemPage>
          <ItemFour></ItemFour>
        </ItemPage>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemPage from "@/components/itemPage.vue"
import ItemOnes from "../components/itemOnes.vue"
import ItemTwo from "@/components/itemTwo.vue"
import ItemThree from "@/components/itemThree.vue"
import ItemFour from "@/components/itemFour.vue"
import MapPage from "@/components/mapPage.vue"
import { inject } from "vue"
export default {
  name: "HomeView",
  components: {
    ItemPage,
    ItemOnes,
    ItemTwo,
    ItemThree,
    ItemFour,
    MapPage,
  },
  setup() {
    let $echarts = inject("echarts")
    let $http = inject("axios")
    console.log($echarts)
    console.log($http)
  },
}
</script>

<style lang="less" scoped>
header {
  height: 1rem;
  width: 100%;
  background-color: rgba(0, 0, blue, 0.2);
  //标题
  h1 {
    font-size: 0.375rem;
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }
}
//大容器
.container {
  //最大最小宽度
  min-width: 1200px;
  max-width: 2048px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  display: flex;
  .leftItem,
  .rightItem {
    flex: 3;
  }
  .centerItem {
    flex: 5;
    // height: 10.5rpx;
    border: 1px solid blue;
    padding: 0.125rem;
    margin: 16px;
  }
}
</style>
