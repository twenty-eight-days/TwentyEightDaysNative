import { Period } from '../model/storage'

export function cycleDuration(periods: Period[]) {
  if (periods.length < 2) {
    return undefined
  }
  const cycleDurations = []
  for (let i = 1; i < periods.length; i++) {
    const day = (periods[i - 1].date.getTime() - periods[i].date.getTime()) / (1000 * 60 * 60 * 24)
    cycleDurations.push(Math.round(day))
  }
  return cycleDurations
}
