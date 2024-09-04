import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import SecondImg from '../../assets/svg/image2'

const Second = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.txt3}>Skip</Text>
     <SecondImg/>
     <Text style={styles.txt1}>Quick and easy learning</Text>
     <Text style={styles.txt2}>Easy and fast learning at any time to help you improve various skills</Text>
    </View>
  )
}

export default Second

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    txt1:{
// fontSize:
    },
    txt2:{
// fontSize:
    },
    txt3:{
        // fontSize:
    }

})