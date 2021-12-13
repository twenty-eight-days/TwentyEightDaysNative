import { Period } from '../model/storage'
export function currentDuration(date: Date) {
  const day = (new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  return Math.round(day)
}
export function cycleDuration(periods: Period[]) {
  if (periods.length < 2) {
    return []
  }
  const cycleDurations = []
  for (let i = 1; i < periods.length; i++) {
    const day = (periods[i - 1].date.getTime() - periods[i].date.getTime()) / (1000 * 60 * 60 * 24)
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
  return sum / duration.length
}
export function varianceDuration(periods: Period[]) {
  let duration: number[] = cycleDuration(periods)
  let average: number = averageDuration(periods)
  let variance: number = 0
  for (let item of duration) {
    variance += (item - average) * (item - average)
  }
  return variance / (duration.length - 1)
}
