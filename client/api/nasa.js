import request from "superagent"

const picOfDay = "https://api.nasa.gov/planetary/apod?date=&api_key=jhVZ9wKfUWxO6dV8lqvjAP2j7d8MZTFkyjZgQeF6"

export function getData() {
  return request.get(picOfDay)
    .then(res => {
      const data = res.body
      return data
    })
}