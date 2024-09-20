import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions,ScrollView } from 'react-native';
import HomeIcon from '../../assets/svg/Dashboard_home';
import HomeWork from '../../assets/svg/HomeWork'
import Attendance from '../../assets/svg/Attendance'
import Quiz from '../../assets/svg/Quiz(Dashboard)'
import Examination from '../../assets/svg/Examination'
const { width } = Dimensions.get('window');
const scale = width / 320;

const DashboardScreen = ({ closeModal }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://your-profile-pic-url.com' }} 
          style={styles.profilePic}
        />
        <View>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileClass}>Class VII B</Text>
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gridContainer}>
        {[
          { label: 'Dashboard', icon: <HomeIcon width={40 * scale} height={40 * scale} /> },  
          { label: 'Homework', icon: <HomeWork width={40 * scale} height={40 * scale}/>},
          { label: 'Attendance', icon: <Attendance width={40*scale} height={40 * scale}/>},
          { label: 'Quiz', icon:<Quiz width={40*scale} height={40 * scale}/>},
          { label: 'Examination', icon: <Examination width={40*scale} height={40 * scale}/>},
          { label: 'Report Cards', iconUri: 'https://your-icon-url/report-cards-icon.png' },
          { label: 'Calendar', iconUri: 'https://your-icon-url/calendar-icon.png' },
          { label: 'Notice Board', iconUri: 'https://your-icon-url/notice-board-icon.png' },
          { label: 'Multimedia', iconUri: 'https://your-icon-url/multimedia-icon.png' },
          { label: 'Academic Year', iconUri: 'https://your-icon-url/academic-year-icon.png' },
          { label: 'Profile', iconUri: 'https://your-icon-url/profile-icon.png' },
        ].map((item, index) => (
          <View key={index} style={styles.gridItemContainer}>
            <TouchableOpacity style={styles.gridItem}>
              {item.icon ? (
                item.icon  
              ) : (
                <Image source={{ uri: item.iconUri }} style={styles.icon} />  
              )}
            </TouchableOpacity>
            <Text style={styles.gridLabel}>{item.label}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10 * scale,
    paddingHorizontal: 10 * scale,
  },
  profilePic: {
    width: 60 * scale,
    height: 60 * scale,
    borderRadius: 30 * scale,
  },
  profileName: {
    fontSize: 18 * scale,
    color: '#000000',
    fontWeight: 'bold',
  },
  profileClass: {
    fontSize: 14 * scale,
    color: '#00000',
  },
  closeButton: {
    backgroundColor: 'transparent',
  },
  closeButtonText: {
    fontSize: 20 * scale,
    color: '#000000',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10 * scale,
  },
  gridItemContainer: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20 * scale

  },
  gridItem: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#3d5cff',
    borderRadius: 60 * scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 40 * scale,
    height: 40 * scale,
  },
  gridLabel: {
    marginTop: 8 * scale,
    fontSize: 12 * scale,
    color: '#000000',
    textAlign: 'center',
    fontWeight : 'bold'
  },
  logoutButton: {
    marginTop: 30 * scale,
    alignSelf: 'center',
  },
  logoutText: {
    color: '#ff0000',
    fontSize: 16 * scale,
  },
});

export default DashboardScreen;
