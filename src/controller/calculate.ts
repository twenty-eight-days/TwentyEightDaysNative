import { Period } from '../model/storage'

export function currentDuration(d: Date) {
  const day = (new Date().getTime() - d.getTime()) / (1000 * 60 * 60 * 24)
  return Math.round(day)
}
export function currentDate(periods: Period[]) {
  const date = new Date()
  if (periods.length !== 0) {
    date.setDate(periods[0].date.getDate())
  }
  return date
}
export function expectedDate(periods: Period[]) {
  let median: number = medianDuration(periods)
  const expected = new Date()
  if (periods.length !== 0) {
    expected.setDate(periods[0].date.getDate() + median)
  }
  return expected
}
export function cycleDuration(periods: Period[]) {
  if (periods.length === 1) {
    return [currentDuration(periods[0].date)]
  }
  if (periods.length === 0) {
    return [0]
  }
  const cycleDurations = []
  for (let i = 1; i < periods.length; i++) {
    const day =
      (periods[i - 1].date.getTime() - periods[i].date.getTime()) /
      (1000 * 60 * 60 * 24)
    cycleDurations.push(Math.round(day))
  }
  return cycleDurations
}
export function averageDuration(periods: Period[]) {
  let duration: number[] = cycleDuration(periods)
  let sum = 0
  for (let i = 0; i < duration.length; i++) {
    sum += duration[i]
  }
  return Math.round(sum / duration.length)
}
export function deviationDuration(periods: Period[]) {
  let duration: number[] = cycleDuration(periods)
  let average: number = averageDuration(periods)
  let deviation: number = 0
  for (let item of duration) {
    deviation += (item - average) * (item - average)
  }
  deviation = Math.round(Math.sqrt(deviation / (duration.length - 1)))
  if (isNaN(deviation)) {
    return 0
  } else {
    return deviation
  }
}
export function medianDuration(periods: Period[]) {
  let duration: number[] = cycleDuration(periods)
  let median,
    numsLen = duration.length
  duration.sort()
  if (numsLen % 2 === 0) {
    median = (duration[numsLen / 2 - 1] + duration[numsLen / 2]) / 2
  } else {
    median = duration[(numsLen - 1) / 2]
  }
  return median
}
