import axios from "axios"

var weather = null
var timer = null
export async function get({ params, request }) {
  if (weather) {
    return {
      body: JSON.stringify(weather)
    }
  }
  var urlquery = request.url.split('?')[1]
  var furl = `https://restapi.amap.com/v3/weather/weatherInfo?key=d0886111e288e35b19f73aabe4e76c8c&${urlquery}`
  const response = await axios.get(furl)
  weather = response.data

  if (!timer) {
    timer = setTimeout(() => {
      weather = null
      timer = null
    }, 360000)
  }
  return {
    body: JSON.stringify(response.data)
  }
}