import ReceiveSharingIntent from 'react-native-receive-sharing-intent'
import { Period, storage } from '../model/storage'

import { Alert, Share } from 'react-native'
import { store, write } from './redux'
export function exportJson(periods: Period[]) {
  Share.share({ message: JSON.stringify(periods) })
}
ReceiveSharingIntent.getReceivedFiles(
  (files: [{ text: string }]) => {
    // files returns as JSON Array example
    //[{ filePath: null, text: null, weblink: null, mimeType: null, contentUri: null, fileName: null, extension: null }]
    const periods = JSON.parse(files[0].text) as Period[]
    for (const period of periods) {
      storage
        .write(period)
        .then(p => store.dispatch(write(p)))
        .catch(() => {
          Alert.alert(
            'Import Failed',
            `We were unable to import the Date ${period.date.toDateString()}`,
            [{ text: 'OK' }]
          )
        })
    }
  },
  (error: Error) => {
    console.log(error)
    Alert.alert('Import Failed', 'We were unable to import', [{ text: 'OK' }])
  },
  'ShareMedia32345' // share url protocol (must be unique to your app, suggest using your apple bundle id)
)

// To clear Intents
ReceiveSharingIntent.clearReceivedFiles()
