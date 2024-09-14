import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Image1 from '../../assets/svg/Acc_Pic';
const {width}=Dimensions.get('window')
const scale =width/320
const Course = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flex1}>
        <View style={styles.flex11}>

        <Text style={styles.txt1}>Course</Text>
        <Image1 size={50*scale}/>
        </View>
        View

      </View>
      <View style={styles.flex2}></View>
    </View>
  )
}

export default Course

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffffff'
  },
  flex1:{
    flex:1,
    // backgroundColor:'#000000'
  },
  flex2:{
flex:4,
backgroundColor:'#000000'
  },
  txt1:{
    color:'#000000',
    fontSize:30*scale,
    fontWeight:'700',
  },
  flex11:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:15*scale,
    alignItems:'center',
    marginTop:10*scale
  }
})