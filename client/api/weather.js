import request from "superagent"

const weather = "https://www.metaweather.com/api/location/2351310"

export function getWeather() {
  // console.log('api')
  return request.get('/api/weather')
    .then(res => {
      // console.log('then')
      const data = res.body
      console.log(data)
      return data
    })
}