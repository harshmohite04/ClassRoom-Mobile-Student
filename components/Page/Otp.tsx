import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Close from '../../assets/svg/close'
import OTPInputView from '@twotalltotems/react-native-otp-input'
const {width}=Dimensions.get('window')
const scale = width/320
const Otp = ({navigation,route}) => {

    // const {phoneNumber,otp} = route.params
    
    //This are temporary
    const phoneNumber = 9356836581
    const otp= 7894

    console.log(phoneNumber)
    console.log(otp)
  return (
    <View style={styles.container}>
        <View style={styles.titleBar}>

      <Close/>
      <Text style={styles.txt1}>Verify Phone</Text>
        </View>

        <Text style={styles.txt2}>Code is sent to {phoneNumber}</Text>
        <OTPInputView
        style={{width:'100%',height:200,paddingHorizontal:32}}
        pinCount={4}
        autoFocusOnLoad
        codeInputFieldStyle={{
            width:30,
            height:45,
            color:'#f4a135',
            borderWidth:2,
            borderColor:'#000000'
        }}

        codeInputHighlightStyle={{
            borderColor:'2ab12f'
        }}
        onCodeFilled={
            (code)=>{
                console.log(`Code is ${code}`)
            }
        }
        >

        </OTPInputView>
    </View>
  )
}

export default Otp

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    titleBar:{
        flexDirection:'row',
        paddingVertical:20*scale,
        paddingHorizontal:10*scale,
        
    },
    txt1:{
        color:'#000000',
        fontSize:17*scale,
        paddingHorizontal:100*scale,
        fontWeight:'700'
    },
    txt2:{
        color:'#858597',
        fontSize:17*scale,
        fontWeight:'500',
        alignSelf:'center'
    }
})