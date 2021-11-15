import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { ExampleButton } from '../../example'

export const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.mainView}>
        <ExampleButton />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(106,13,173,0.5)',
  },
  mainView: {
    height: '100%',
    backgroundColor: 'rgb(106,13,173)',
    justifyContent: 'center',
  },
})
