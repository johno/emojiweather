import test from 'ava'
import emojiweather from './'

test('emojiweather does something awesome', t => {
  t.plan(3)

  t.is(emojiweather('sunny'), '🌞')
  t.is(emojiweather('partly CLOUDY'), '⛅')
  t.is(emojiweather('rain'), '🌧')
})
