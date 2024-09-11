import { StyleSheet, Text, View, Dimensions, TouchableOpacity, useColorScheme } from 'react-native';
import React, { useEffect, useRef } from 'react';
import Image1 from '../../assets/svg/first(image)';  // Light mode image
import DarkImage1 from '../../assets/svg/first(imageDark)';  // Dark mode image

const { width } = Dimensions.get('window');
const scale = width / 320;

const lightTheme = {
  background: '#FFFFFF',
  textPrimary: '#1F1F39',
  textSecondary: '#858597',
  skipText: '#1F1F39',
};

const darkTheme = {
  background: '#1F1F39',
  textPrimary: '#FFFFFF',
  textSecondary: '#A9A9A9',
  skipText: '#FFFFFF',
};

const First = ({ navigation }) => {
  const colorScheme = useColorScheme();  
  const isDarkMode = colorScheme === 'dark';
  const colors = isDarkMode ? darkTheme : lightTheme;
  const timerRef = useRef(null);
  useEffect(() => {
    timerRef.current =setTimeout(() => {
      navigation.push('Second');
    }, 3000);
  }, [navigation]);

  const ImageComponent = isDarkMode ? DarkImage1 : Image1;

  return (
    <View style={[styles.Background, { backgroundColor: colors.background }]}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => {
          navigation.push('Second')
          clearTimeout(timerRef.current)
          }
        }>
        <Text style={[styles.txt3, { color: colors.skipText }]}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <ImageComponent size={190*scale}/> 
      </View>
      <View style={styles.TextContainer}>
        <Text style={[styles.headingText, { color: colors.textPrimary }]}>
          Numerous free Trial courses
        </Text>
        <Text style={[styles.headingText2, { color: colors.textSecondary }]}>
          Free courses for you to find your way to learning.
        </Text>
      </View>
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipButton: {
    position: 'absolute',
    top: 20 * scale,
    right: 20 * scale,
  },
  container: {
    padding: 10 * scale,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextContainer: {
    height: 120 * scale,
    width: 130 * scale,
    marginTop: 10 * scale,
  },
  headingText: {
    fontSize: 18 * scale,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 8 * scale,
  },
  headingText2: {
    fontSize: 12 * scale,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5 * scale,
    paddingBottom: 10 * scale,
  },
  txt3: {
    fontSize: 12 * scale,
    textAlign: 'right',
    fontWeight: 'bold',
    paddingRight: 10 * scale,
    textDecorationLine: 'underline',
  },
});
