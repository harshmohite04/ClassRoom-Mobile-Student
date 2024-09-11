import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from '../../assets/svg/Logo';
const {width}=Dimensions.get('window')
const scale = width/320

const Home = () => {
  return (
    <View>
      <Logo size={250*scale}/>
      <Text style={styles.txt}>Hello Harsh</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  txt:{
    fontSize:60*scale,
    color:'#000000'
  }
});
