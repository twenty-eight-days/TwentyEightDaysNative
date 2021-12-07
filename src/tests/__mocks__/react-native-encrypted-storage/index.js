//__mocks__/react-native-encrypted-storage/index.js

const RNEncryptedStorage = {
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(JSON.stringify([{ date: new Date(1638879766) }]))),
  removeItem: jest.fn(() => Promise.resolve()),
  clear: jest.fn(() => Promise.resolve()),
}

export default RNEncryptedStorage
