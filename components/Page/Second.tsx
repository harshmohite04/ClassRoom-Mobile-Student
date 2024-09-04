import {StyleSheet, Text, View,TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';

import SecondImg from '../../assets/svg/image2';

const {width} = Dimensions.get('window');
const scale = width / 320;
const Second = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity
        onPress={()=>navigation.push('First')}>

      <Text style={styles.txt3}>Skip</Text>
        </TouchableOpacity>
      <View style={styles.middle}>
        <SecondImg />
        <Text style={styles.txt1}>Quick and easy learning</Text>
        <Text style={styles.txt2}>
          Easy and fast learning at any time to help
           you improve various skills
        </Text>
      </View>
    </View>
  );
};

export default Second;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:15*scale,
    paddingVertical:15*scale,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  txt1: {
    fontSize: 15 * scale,
    fontWeight: 'bold',
    color: '#000000',
    paddingVertical:10*scale,
    textAlign:'center',
    paddingTop:30*scale
  },
  txt2: {
    fontSize: 11 * scale,
    color: '#000000',
    paddingVertical:10*scale,
    textAlign:'center'

  },
  txt3: {
    fontSize: 10 * scale,
    textAlign: 'right',
    paddingRight: 10 * scale,
    textDecorationLine:'underline'

  },
  middle:{
    justifyContent:'center',
    alignItems:'center',
    flex:1
  }
});
