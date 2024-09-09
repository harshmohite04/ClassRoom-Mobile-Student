import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Img3 from '../../assets/svg/image3';
const {width} = Dimensions.get('window');
const scale = width / 320;
const Third = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Img3 />
      <Text style={styles.txt1}>Create your own study plan</Text>
      <Text style={styles.txt2}>
        Study according to the study plan, make study more motivated
      </Text>
      <View style={styles.button}>
        <TouchableOpacity style={styles.btn1}
        onPress={()=>{
          navigation.push('Phone')
        }}>
          <Text style={styles.txt3}>Sign Up with Phone Number</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}
        onPress={()=>{
          navigation.push('Login')
        }}>
          <Text style={styles.txt4}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Third;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt1: {
    fontSize: 15 * scale,
    color: '#000000',
    fontWeight: 'bold',
  },
  txt2: {
    fontSize: 10 * scale,
    color: '#858597',
    fontWeight: '500',
  },
  button: {
    flexDirection: 'row',
    marginTop: 15 * scale,
    marginHorizontal:50*scale
  },
  btn1: {
    backgroundColor: '#3D5CFF',
    paddingHorizontal: 10 * scale,
    paddingVertical: 5 * scale,
    borderRadius: 8 * scale,
    marginRight: 10 * scale,
  },
  btn2: {
    paddingHorizontal: 10 * scale,
    paddingVertical: 5 * scale,
    borderRadius: 8 * scale,
    borderWidth: 1,
    borderColor: '#3D5CFF',
  },
  txt3:{
    color:'#ffffff',
    fontSize:13*scale,
    textAlign:'center'
  },
  txt4:{
    color:'#000000',
    fontSize:13*scale,
    textAlign:'center'
  }
});
