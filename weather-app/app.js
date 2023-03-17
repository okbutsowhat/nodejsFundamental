import request from 'postman-request';
import chalk from 'chalk';
import util from 'util';
const requestPromise = util.promisify(request)

const getLonLat = async (addressName) => {
  const mapUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressName}.json?language=zh&limit=1&access_token=pk.eyJ1IjoiZnJlZWNoYXIiLCJhIjoiY2xmNmY2czd4MWM5ZjNzbzQxbGgwZHZmcSJ9.8aHTdU84v1FcDKIwB-TC8g`
  try {
    const response = await requestPromise({ url: mapUrl, json: true })
    if (response.body.features.length === 0) {
      console.log('Failed to get latitude and longitude');
    } else {
      return response.body.features[0].center
    }
  } catch {
    console.log('Failed to get latitude and longitude');
    return null
  }
}

const getWeather = async (lon, lat) => {
  const key = 'bb7b3160dc6ee85b39da4c57e2673a71'
  const weatherUrl = `http://api.weatherstack.com/current?access_key=${key}&query=${lat},${lon}`
  try {
    const response = await requestPromise({ url: weatherUrl, json: true })
    const data = response.body.current
    const temperature = data.temperature
    const feelsLike = data.feelslike
    console.log(chalk.blue(`It is currently ${temperature} degress out. It feels like ${feelsLike} degress out.`));
  } catch {
    console.log('Failed to get weather');
  }
}

const getWeatherByLocation = async (addressName) => {
  const locationCenter = await getLonLat(addressName)
  console.log(locationCenter);
  getWeather(...locationCenter)
}

getWeatherByLocation('guiyang')