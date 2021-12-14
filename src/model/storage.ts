import EncryptedStorage from 'react-native-encrypted-storage'

export interface Storage {
  read: () => Promise<Period[]>
  write: (period: Period) => Promise<Period[]>
  delete: (period: Period) => Promise<Period[]>
}

export interface Period {
  date: Date
}

async function pushAsyncPeriod(newPeriod: Period) {
  const periods = await getAsyncPeriod()
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
  return periods
}

async function getAsyncPeriod() {
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

async function removeDate(periodToDelete: Period) {
  const periods = await storage.read()
  const updatedPeriods = []
  for (let period of periods) {
    if (period.date.toDateString() !== periodToDelete.date.toDateString()) {
      updatedPeriods.push(period)
    }
  }
  await EncryptedStorage.setItem('period', JSON.stringify(updatedPeriods))
  return await getAsyncPeriod()
}

export async function deleteAll() {
  await EncryptedStorage.setItem('period', JSON.stringify([]))
}
export const storage: Storage = {
  read: getAsyncPeriod,
  write: pushAsyncPeriod,
  delete: removeDate,
}
