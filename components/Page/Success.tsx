import { StyleSheet, Text, View, Dimensions, TouchableOpacity, useColorScheme } from 'react-native';
import React from 'react';
import Image1 from '../../assets/svg/Tick';

const { width } = Dimensions.get('window');
const scale = width / 320;

const lightTheme = {
  background: '#FFFFFF',
  textPrimary: '#1F1F39',
  textSecondary: '#858597',
  buttonBackground: '#3D5CFF',
  buttonText: '#FFFFFF',
};

const darkTheme = {
  background: '#2F2F42',
  textPrimary: '#FFFFFF',
  textSecondary: '#A9A9A9',
  buttonBackground: '#3D5CFF', 
  buttonText: '#FFFFFF',
};

const Success = () => {
  const colorScheme = useColorScheme(); // Get the system color scheme (dark or light)
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    // <View style={[styles.container, { backgroundColor: colorScheme === 'dark' ? '#1F1F39' : '#FFFFFF' }]}>
      <View style={[styles.middleContainer, { backgroundColor: theme.background }]}>
        <View style={styles.ImageCard}>
          <Image1 />
        </View>
        <Text style={[styles.txt1, { color: theme.textPrimary }]}>Success</Text>
        <Text style={[styles.txt2, { color: theme.textSecondary }]}>
          Congratulations, you have
          completed your registration!
        </Text>

        <TouchableOpacity style={[styles.doneButton, { backgroundColor: theme.buttonBackground }]}>
          <Text style={[styles.doneButtonText, { color: theme.buttonText }]}>Done</Text>
        </TouchableOpacity>
      </View>
      //  </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleContainer: {
    height: 250 * scale,
    width: 250 * scale,
    borderRadius: 12 * scale,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20 * scale,
  },
  ImageCard: {
    alignItems: 'center',
    marginTop: 10 * scale,
  },
  txt1: {
    fontSize: 15 * scale,
    fontWeight: 'bold',
    marginTop: 10 * scale,
  },
  txt2: {
    marginTop: 10 * scale,
    fontSize: 12 * scale,
    paddingHorizontal: 20 * scale,
    textAlign: 'center',
  },
  doneButton: {
    marginTop: 10 * scale,
    paddingVertical: 12 * scale,
    paddingHorizontal: 80 * scale,
    borderRadius: 12 * scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneButtonText: {
    fontSize: 14 * scale,
    fontWeight: 'bold',
  },
});
