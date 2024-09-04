import { StyleSheet, Text, View ,Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import Image3 from '../../assets/svg/image3'

const {width} = Dimensions.get('window');
const scale = width / 320;

const Third = ({navigation}) => {
  return (
    <View style= {styles.container} >
      <Text>Third</Text>
      <View style={styles.imageCard}>
        <Image3/>
        <Text style={styles.headingText1}>Create your own 
        study plan
        </Text>
        <Text style={styles.headingText2}>
        Study according to the 
        study plan, make study 
        more motivated
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText2}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Third

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent : 'center',
    alignContent : 'center',
    paddingRight : 15 * scale
  },
  imageCard: {
    flex: 1,
    // alignContent : 'center',
    alignSelf: 'center',
    justifyContent : 'center',
    alignItems: 'center',
    // paddingLeft: 60 * scale,
    marginBottom : 40 * scale
  },
  headingText1 :{
    fontSize : 17 * scale,
    color : '#1F1F39',
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign : 'center',
    paddingRight: 20 * scale,
    marginBottom : 5 * scale
  },
  headingText2 : {
    color : '#858597',
    textAlign: 'center',
    fontSize : 14 * scale,
    fontWeight : 'bold',
    paddingRight: 30 * scale,
    
  },
  buttonContainer :{ 
    paddingTop: 10 * scale,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 80 * scale,
    marginLeft : 10 * scale
  },
  button1: {
    backgroundColor: '#3D5CFF',
    paddingVertical: 10 * scale,
    paddingHorizontal: 20 * scale,
    borderRadius: 8 * scale,
  },
  button2: {
    borderWidth : 3,
    borderColor : '#3D5CFF',
    paddingVertical: 10 * scale,
    paddingHorizontal: 20 * scale,
    borderRadius: 10 * scale,
    marginLeft : 20 * scale
  },
  buttonText1 :{
    color: '#FFFFFF',
    fontSize: 14 * scale,
    fontWeight: 'bold',
  },
  buttonText2 : {
    color : '#000000',
    fontSize: 14 * scale,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})