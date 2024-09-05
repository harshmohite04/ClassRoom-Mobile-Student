import {TouchableOpacity, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PhoneImg from '../../assets/svg/phone1'
import { TextInput } from 'react-native-gesture-handler'
import * as Yup from 'yup'

const {width} = Dimensions.get('window')
const scale = width/320;
const SignUp = () => {
  const phoneSchema = Yup.object().shape({
    phoneLength : Yup.number()
    .min(10,"Must be 10 number")
    .max(10,"Must be 10 number")
    .required("Required Field")
  })
  const [phone,setPhone]=useState('')
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txt1}>Continue with Phone</Text>
      <PhoneImg/>
      <View style={styles.container2}>
          <Text style={styles.phoneText}>
          Enter Your  Phone Number
          </Text>
          <TextInput
        style={styles.input}
        onChangeText={setPhone}
        value={phone}
        placeholder="9356835871"
        keyboardType="numeric"
      />
      <TouchableOpacity>

      <View style={styles.getOtp}>
        <Text style={styles.getOtptxt}>Get OTP</Text>
      </View>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    paddingVertical:1*scale
  },
  txt1:{
    fontSize:15*scale,
    color:'#000000',
    paddingVertical:20*scale,
    fontWeight:'700'
  },
  container2 : { 
    marginTop : 50* scale,
    alignItems:'center'
  },
  phoneText: {
    fontSize:12*scale
  },
  input:{
    borderRadius:10*scale,
    borderWidth:2*scale,
    marginTop:10*scale,
    paddingHorizontal:10*scale,
    paddingRight:150*scale
  },
  getOtp:{
    backgroundColor:'#3D5CFF',
    marginVertical:10*scale,
    borderRadius:10*scale ,
    paddingVertical:10*scale,
    paddingHorizontal:20*scale
  },
  getOtptxt:{
    color:'#FFFFFF',
    fontSize:12*scale,
    fontWeight:'600'
  }
})