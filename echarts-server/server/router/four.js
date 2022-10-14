let express = require("express")

let router = express.Router()
let fourData = require("../mock/four.json")
router.get("/data", (req, res) => {
  res.send({ msg: "four", chartData: fourData })
})

module.exports = router
