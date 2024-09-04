import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Image1 from '../../assets/svg/image1'

export default function First() {
  return (
    <View style={styles.Background}>
      <Text>App</Text>
      <View style={styles.container}>
        <Image1/>
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.headingText}>
          Numerous free Trial courses
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  container: {
    flex: 1,  // Take up available space
    alignItems: 'center',  // Center horizontally
    justifyContent: 'center', // Center vertically
    paddingBottom :200
  },
  TextContainer: {
    width: 50,
    height : 50,

  },
  headingText : {
    height: 50,
    width: 60,
    color : '#1F1F39'
  }
})
