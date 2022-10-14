let express = require("express")

let router = express.Router()
let chinaData = require("../mock/china.json")
router.get("/data", (req, res) => {
  res.send({ msg: "china", chartData: chinaData })
})

module.exports = router
