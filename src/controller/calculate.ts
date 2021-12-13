import { Period } from '../model/storage'

export function currentDuration(d: Date) {
  const day = (new Date().getTime() - d.getTime()) / (1000 * 60 * 60 * 24)
  return Math.round(day)
}
export function expectedDate(date: Date) {
  const expected = new Date()
  expected.setDate(date.getDate() + 28)
  return expected
}
export function cycleDuration(periods: Period[]) {
  if (periods.length < 2) {
    return []
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
  return Math.round(Math.sqrt(deviation / (duration.length - 1)))
}
