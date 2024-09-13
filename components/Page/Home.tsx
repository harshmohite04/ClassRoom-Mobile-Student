import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MenuLight from '../../assets/svg/MenuLight';
const {width} = Dimensions.get('window');
const scale = width / 320;
import Image1 from '../../assets/svg/Acc_Pic';
import RightAd from '../../assets/svg/RightAd';
import LeftAd from '../../assets/svg/LeftAd';
const Home = () => {
  const username = 'Harsh';
  return (
    <View style={styles.container}>
      <View style={styles.flex1}>
        <View style={styles.flex11}>
        <MenuLight size={20 * scale} />

        <View style={styles.flex12}>
          <Text style={styles.txt1}>Hi,{username}</Text>
          <Text style={styles.txt2}>Let's start Learning</Text>
        </View>
        </View>
        <Image1 size={50 * scale} />
      </View>
      <View style={styles.flex2}>
        <View style={styles.flex22}>

        <LeftAd/>
        <RightAd/>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  flex1: {
    flex: 2,
    backgroundColor: '#3D5CFF',
    flexDirection: 'row',
    paddingHorizontal:10*scale,
    paddingTop:25*scale,
    justifyContent:'space-between'
  },
  flex2: {
    flex: 9,
  },
  flex22: {
    flexDirection:'row'
  },
  txt1: {
    fontSize: 27 * scale,
    fontWeight: '800',
  },
  txt2: {
    fontSize: 14 * scale,
    fontWeight: '400',
  },
  flex11:{
    flexDirection: 'row',
  },
  flex12:{
    paddingHorizontal:15*scale
  }
});
