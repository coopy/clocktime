const SIXTY = 60

function ClockTime (hours, minutes, seconds) {
  let h = hours || 0
  let m = minutes || 0
  let s = seconds || 0

  // Convert any seconds over 60 to minutes
  m += Math.floor(s / SIXTY)
  s = s % SIXTY

  // Convert any minutes over 60 to hours
  h += Math.floor(m / SIXTY)
  m = m % SIXTY

  return {
    hours: h,
    minutes: m,
    seconds: s
  }
}

function normalize(input) {
  return (typeof input === 'number')
    ? input
    : parseInt(input, 10)
}

function fromSeconds (input) {
  const seconds = normalize(input)

  return new ClockTime(0, 0, seconds)
}

function fromMinutes (input) {
  const minutes = normalize(input)

  return new ClockTime(0, minutes, 0)
}

function fromHours (input) {
  const hours = normalize(input)

  return new ClockTime(hours, 0, 0)
}

module.exports = {
  fromSeconds,
  fromMinutes,
  fromHours
}
