import EncryptedStorage from 'react-native-encrypted-storage'

export interface Storage {
  read: () => Promise<Period[]>
  write: (period: Period) => Promise<Period[]>
}

export interface Period {
  date: Date
}

async function pushAsyncPeriod(period: Period) {
  const periods = await getAsyncPeriod()
  periods.push(period)
  await EncryptedStorage.setItem('period', JSON.stringify(periods)).catch((error: Error) => console.log(error))
  return periods
}

async function getAsyncPeriod() {
  const periodStorage = await EncryptedStorage.getItem('period')
  if (periodStorage === undefined || periodStorage === null) {
    await EncryptedStorage.setItem('period', '[]').catch((error: Error) => console.log(error))
    return [] as Period[]
  } else {
    return JSON.parse(periodStorage) as Period[]
  }
}

export const storage: Storage = {
  read: getAsyncPeriod,
  write: pushAsyncPeriod,
}

console.log(storage.read())
