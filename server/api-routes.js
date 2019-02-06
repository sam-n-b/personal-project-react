const request = require("superagent")


const express = require('express')

const router = express.Router()

router.use(express.json())


const weather = "https://www.metaweather.com/api/location/2351310"


router.get('/', (req, res) => {
  // console.log('route!')
  request.get(weather)
    .then(apiRes => {
      const data = apiRes.body.consolidated_weather[0]
      // console.log(data)
      res.json(data)
    })
})

// export function getWeather() {
//   return request.get(weather)
//     .then(res => {
//       const data = res.body
//       // console.log(data)
//       return data
//     })
// }

module.exports = router