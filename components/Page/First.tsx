import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Image1 from '../../assets/svg/image1'

export default function First() {
  return (
    <View style={styles.Background}>
      <View style={styles.container}>
        <Image1/>
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.headingText}>
          Numerous free Trial courses
        </Text>
        <Text style={styles.headingText2}>
        Free courses for you to 
        find your way to learning
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',  // Center horizontally
    justifyContent: 'center'
  },
  container: {// Take up available space
    alignItems: 'center',  // Center horizontally
    justifyContent: 'center', // Center verticall
  },
  TextContainer: {
    height : 166,
    width : 150,
    marginTop : 10

  },
  headingText : {
    color : '#1F1F39',
    fontSize: 22,
    fontWeight : 'bold',
    textAlign: 'center'
  },
  headingText2 : {
    color : '#858597',
    height : 201,
    width : 160,
    fontSize : 16,
    marginBottom : 10
  }
})
