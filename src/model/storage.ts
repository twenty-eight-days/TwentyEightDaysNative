export interface Storage {
  read: () => Period[]
}

interface Period {
  date: Date
}

function getAsyncPeriod() {
  let period: Period[] = [{ date: new Date() }]
  return period
}

export const storage: Storage = {
  read: getAsyncPeriod,
}

console.log(storage.read())
