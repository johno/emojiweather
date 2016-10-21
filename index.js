'use strict'

module.exports = function emojiweather (weather) {
  if (typeof weather !== 'string') {
    throw new TypeError('emojiweather expected a string')
  }

  var emoji = undefined
  switch (normalize(weather)) {
    case 'rain':
    case 'rainy':
    case 'chancerain':
      emoji = '🌧'
      break
    case 'thunder':
    case 'thunderstorm':
    case 'tstorm':
    case 'tstorms':
    case 'chancetstorms':
    case 'stormy':
    case 'storm':
    case 'lightning':
      emoji = '⛈'
      break
    case 'mostlysunny':
    case 'mostlysunnyday':
    case 'mostlysunnynight':
      emoji = '🌤'
      break
    case 'partlysunny':
    case 'partlycloudy':
    case 'partlycloudyday':
    case 'partlycloudynight':
    case 'mostlycloudy':
      emoji = '⛅'
      break
    case 'sunny':
    case 'clear':
    case 'haze':
    case 'clearnight':
    case 'clearday':
      emoji = '🌞'
      break
    case 'snow':
    case 'chancesnow':
    case 'snowing':
    case 'snowy':
    case 'sleet':
    case 'flurries':
    case 'chanceflurries':
      emoji = '🌨'
      break
    case 'fog':
      emoji = '🌫'
      break
    case 'tornado':
      emoji = '🌪'
      break
    case 'windy':
    case 'wind':
      emoji = '💨'
      break
    case 'cloud':
    case 'cloudy':
    case 'overcast':
      emoji = '☁'
      break
  }

  return emoji
}

function normalize (weather) {
  return weather.replace(/[^A-z]/g, '').toLowerCase()
}
