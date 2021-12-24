import EncryptedStorage from 'react-native-encrypted-storage'

export interface Period {
  date: Date
}
// secure storage is async by nature
export interface Storage {
  read: () => Promise<Period[]>
  write: (period: Period) => Promise<Period[]>
  delete: (period: Period) => Promise<Period[]>
  deleteAll: () => void
}
export const storage: Storage = {
  read: getPeriod,
  write: writePeriod,
  delete: removePeriod,
  deleteAll: deleteAllPeriods,
}
async function getPeriod() {
  const periodStorage = await EncryptedStorage.getItem('period')
  if (periodStorage === undefined || periodStorage === null) {
    await EncryptedStorage.setItem('period', '[]').catch((error: Error) =>
      console.log(error)
    )
    return [] as Period[]
  } else {
    let periods = JSON.parse(periodStorage) as Period[]
    for (const period of periods) {
      period.date = new Date(period.date)
    }
    periods.sort(function (a, b) {
      return b.date.getTime() - a.date.getTime()
    })
    return periods
  }
}
async function writePeriod(newPeriod: Period) {
  const periods = await getPeriod()
  for (let period of periods) {
    const date = period.date
    const newDate = newPeriod.date
    if (
      date.getDate() === newDate.getDate() &&
      date.getMonth() === newDate.getMonth() &&
      date.getFullYear() === newDate.getFullYear()
    ) {
      return periods
    }
  }
  periods.push(newPeriod)
  await EncryptedStorage.setItem('period', JSON.stringify(periods)).catch(
    (error: Error) => console.log(error)
  )
  return await getPeriod()
}
async function removePeriod(periodToDelete: Period) {
  const periods = await storage.read()
  const updatedPeriods = []
  for (let period of periods) {
    if (period.date.toDateString() !== periodToDelete.date.toDateString()) {
      updatedPeriods.push(period)
    }
  }
  await EncryptedStorage.setItem('period', JSON.stringify(updatedPeriods))
  return await getPeriod()
}
async function deleteAllPeriods() {
  await EncryptedStorage.setItem('period', JSON.stringify([]))
}
