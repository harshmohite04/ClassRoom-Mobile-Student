import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={[styles.headerBar]}>
      <Text style={[styles.textCenter]}>ClassRoom</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  headerBar : {
    height : 50,
    width: '100%',
    backgroundColor: '#95a832',
    borderRadius : 4,
    justifyContent: 'center',
    alignItems : 'center'
  },
  textCenter : {
    fontSize : 24,
    fontFamily : 'bold',
    paddingHorizontal : 5
  }
})