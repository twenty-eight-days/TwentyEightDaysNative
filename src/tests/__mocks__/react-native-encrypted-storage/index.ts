//__mocks__/react-native-encrypted-storage/index.js
import { Period } from '../../../model/storage'

let mockPeriodStorage: Period[] = [
    { date: new Date(2021, 1, 1) },
    { date: new Date(2021, 1, 11)}
]
const RNEncryptedStorage = {
  setItem: jest.fn(() =>
    Promise.resolve((string: string) => {
      mockPeriodStorage = JSON.parse(string) as Period[]
      return mockPeriodStorage
    })
  ),
  getItem: jest.fn(() => Promise.resolve(JSON.stringify(mockPeriodStorage))),
  //removeItem: jest.fn(() => Promise.resolve()),
  //clear: jest.fn(() => Promise.resolve()),
}

export default RNEncryptedStorage
