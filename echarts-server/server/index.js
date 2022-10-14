let express = require("express")

let app = express()
//跨域
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Header",
    "Content-Type,Content-Length,Authorization"
  )
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  next()
})

//引用路由文件
let chartOne = require("./router/one")
let chartTwo = require("./router/two")
let chartThree = require("./router/three")
let chartFour = require("./router/four")
let chartChina = require("./router/china")
//中间件配置路由
app.use("/one", chartOne)
app.use("/two", chartTwo)
app.use("/three", chartThree)
app.use("/four", chartFour)
app.use("/china", chartChina)

app.listen(8888)
