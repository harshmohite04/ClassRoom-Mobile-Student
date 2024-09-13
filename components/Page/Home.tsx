import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MenuLight from '../../assets/svg/MenuLight';
const {width} = Dimensions.get('window');
const scale = width / 320;
import Image1 from '../../assets/svg/Acc_Pic';
import RightAd from '../../assets/svg/RightAd';
import LeftAd from '../../assets/svg/LeftAd';
import AttendanceHeatmap from './AttendanceHeatmap.tsx'
const Home = () => {
  const username = 'Harsh';
  const ongoingLecture="DBMS"
  const upcomingLecture="SP"
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
        <View style={styles.flex21}>
          <View style={styles.leftAd}>
            <LeftAd size={75 * scale} style={styles.img1} />
            <View style={styles.leftAdI}>
              <Text style={styles.txt3}>Ongoing Lecture</Text>
              <Text style={styles.txt4}>{ongoingLecture}</Text>
            </View>
          </View>
          <View style={styles.rightAd}>
            <View style={styles.rightAdI}>
              <Text style={styles.txt3}>Upcoming Lecture</Text>
              <Text style={styles.txt4}>{upcomingLecture}</Text>
            </View>
            <RightAd size={70 * scale} style={styles.img1}/>
          </View>
        </View>
        {/* <AttendanceHeatmap/> */}
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
    paddingHorizontal: 10 * scale,
    paddingTop: 25 * scale,
    justifyContent: 'space-between',
  },
  flex2: {
    flex: 9,
    paddingVertical: 10 * scale,
  },
  flex22: {
    flexDirection: 'row',
  },
  txt1: {
    fontSize: 27 * scale,
    fontWeight: '800',
    color: '#ffffff',
  },
  txt2: {
    fontSize: 14 * scale,
    fontWeight: '400',
    color: '#ffffff',
  },
  flex11: {
    flexDirection: 'row',
  },
  flex12: {
    paddingHorizontal: 15 * scale,
  },
  flex21: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftAd: {
    width: '45%',
    backgroundColor: '#CEECFE',
    height: 70 * scale,
    marginHorizontal: 3 * scale,
    borderRadius: 10 * scale,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rightAd: {
    width: '45%',
    backgroundColor: '#EFE0FF',
    height: 70 * scale,
    marginHorizontal: 3 * scale,
    borderRadius: 10 * scale,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  leftAdI: {
    height: '55%',
    width: '60%',
    backgroundColor: '#F3FBFF',
    borderTopLeftRadius: 8 * scale,
    borderBottomLeftRadius: 8 * scale,
    alignSelf: 'center',
  },
  rightAdI: {
    height: '55%',
    width: '60%',
    backgroundColor: '#F3FBFF',
    borderTopRightRadius: 8 * scale,
    borderBottomRightRadius: 8 * scale,
    alignSelf: 'center',
  },
  txt3: {
    color: '#000000',
    fontSize: 10 * scale,
    textDecorationLine: 'underline',
    fontWeight: '500',
    textAlign:'center'
  },
  txt4: {
    color: '#000000',
    fontSize: 20 * scale,
    fontWeight: '500',
    textAlign:'center'
  },
  img1:{
    // alignSelf:'flex-end'
    alignSelf:'center'
  }
});
