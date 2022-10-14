<template>
  <router-view />
</template>
<script>
import { provide } from "vue"
import * as echarts from "echarts"
import axios from "axios"
axios.defaults.baseURL = "http://localhost:8888"
export default {
  setup() {
    provide("echarts", echarts)
    provide("axios", axios)
  },
}
</script>
<style>
body {
  background: url("~@/assets/bg2.jpg") top center no-repeat;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
