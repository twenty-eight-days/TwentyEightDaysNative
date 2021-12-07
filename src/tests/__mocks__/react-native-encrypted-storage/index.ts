//__mocks__/react-native-encrypted-storage/index.js
import { Period } from '../../../model/storage'

const mockPeriodStorage: Period[] = [{ date: new Date() }]
const RNEncryptedStorage = {
  setItem: jest.fn(() =>
    Promise.resolve((string: string) => {
      mockPeriodStorage.push(JSON.parse(string) as Period)
      return mockPeriodStorage
    })
  ),
  getItem: jest.fn(() => Promise.resolve(JSON.stringify(mockPeriodStorage))),
  //removeItem: jest.fn(() => Promise.resolve()),
  //clear: jest.fn(() => Promise.resolve()),
}

export default RNEncryptedStorage
