import { StyleSheet, Text, View, Image, Dimensions ,TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import Image1 from '../../assets/svg/image1'

const {width} = Dimensions.get('window');
const scale = width / 320;

const First  = ({navigation}) =>  {

  useEffect(() => {
    setTimeout(() => {
      navigation.push('Second')
    }, 3000);
  });
  return (
    <View style={styles.Background}>
      <TouchableOpacity
      style={styles.skipButton}
        onPress={()=>navigation.push('Second')}>
      <Text style={styles.txt3}>Skip</Text>
        </TouchableOpacity>
      <View style={styles.container}>
        <Image1/>
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.headingText}>
          Numerous free Trial courses
        </Text>
        <Text style={styles.headingText2}>
        Free courses for you to find your way to learning.
        </Text>
      </View>
    </View>
  )
};
export default First;

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',  // Center horizontally
    justifyContent: 'center'
  },
  skipButton: {
    position: 'absolute',
    top: 20 * scale,
    right: 20 * scale,
  },
  container: {// Take up available space
    padding : 10 * scale,
    alignItems: 'center',  // Center horizontally
    justifyContent: 'center', // Center verticall
  },
  TextContainer: {
    height : 120 * scale,
    width :  130 * scale,
    marginTop : 10 * scale

  },
  headingText : {
    color : '#1F1F39',
    fontSize: 18 * scale,
    fontWeight : 'bold',
    textAlign: 'center',
    paddingBottom : 8 * scale
  },
  headingText2 : {
    color : '#858597',
    height : 80 * scale,
    width : 120 * scale,
    fontSize : 12 * scale,
    textAlign : 'center',
    fontWeight : 'bold',
    marginBottom  : 5 * scale,
    paddingBottom : 10 * scale
  },
  txt3: {
    fontSize: 10 * scale,
    textAlign: 'right',
    fontWeight: 'bold',
    paddingRight: 10 * scale,
    textDecorationLine:'underline'
  },
})
