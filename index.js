'use strict'

module.exports = function emojiweather (weather) {
  if (typeof weather !== 'string') {
    throw new TypeError('emojiweather expected a string')
  }

  var emoji = undefined
  switch (normalize(weather)) {
    case 'mostlysunny':
      emoji = '🌤'
      break
    case 'partlysunny':
    case 'partlycloudy':
    case 'mostlycloudy':
      emoji = '⛅'
      break
    case 'sunny':
      emoji = '🌞'
      break
  }

  return emoji
}

function normalize (weather) {
  return weather.replace(/[^A-z]/g, '').toLowerCase()
}
