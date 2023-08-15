import axios from "axios"
import md5 from "md5"

var weather = null
var timer = null
export async function get({ params, request }) {
  // if (weather) {
  //   return {
  //     body: JSON.stringify(weather)
  //   }
  // }
  var urlquery = request.url.split('?')[1]
  var sigvalue = md5('md5(4c0890058bc021ac38b44cf6b61ee39e)')
  // var furl = `https://restapi.amap.com/v3/weather/weatherInfo?key=d0886111e288e35b19f73aabe4e76c8c&${urlquery}&sig=MD5(4c0890058bc021ac38b44cf6b61ee39e)`
  var furl = `https://restapi.amap.com/v3/weather/weatherInfo?key=d0886111e288e35b19f73aabe4e76c8c&${urlquery}&sig=md5(4c0890058bc021ac38b44cf6b61ee39e)`
  const response = await axios.get(furl)
  weather = response.data

  console.log(encodeURI(sigvalue), weather, furl)

  // if (!timer) {
  //   timer = setTimeout(() => {
  //     weather = null
  //     timer = null
  //   }, 360000)
  // }
  return {
    body: JSON.stringify(response.data)
  }
}