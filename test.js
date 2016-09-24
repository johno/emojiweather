import test from 'ava'
import emojiweather from './'

test('emojiweather does something awesome', t => {
  t.plan(2)

  t.is(emojiweather('sunny'), '🌞')
  t.is(emojiweather('partly CLOUDY'), '⛅')
})
