import { Period } from '../model/storage'
import { Share } from 'react-native'

export function exportJson(periods: Period[]) {
  Share.share({ message: JSON.stringify(periods) })
}
export function importJson() {}
