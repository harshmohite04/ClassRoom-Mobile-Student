import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  useColorScheme
} from 'react-native';
import React from 'react';
import Image3 from '../../assets/svg/image3'; // Light mode image
import DarkImage3 from '../../assets/svg/darkImage3'; // Dark mode image

const { width } = Dimensions.get('window');
const scale = width / 320;

const lightTheme = {
  background: '#FFFFFF',
  textPrimary: '#1F1F39',
  textSecondary: '#858597',
  skipText: '#1F1F39',
  buttonPrimary: '#3D5CFF',
  buttonSecondary: '#000000',
  buttonOutline: '#3D5CFF',
};

const darkTheme = {
  background: '#1F1F39',
  textPrimary: '#FFFFFF',
  textSecondary: '#A9A9A9',
  skipText: '#FFFFFF',
  buttonPrimary: '#4A5AFF',
  buttonSecondary: '#FFFFFF',
  buttonOutline: '#4A5AFF',
};

const Third = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const colors = isDarkMode ? darkTheme : lightTheme;
  const ImageComponent = isDarkMode ? DarkImage3 : Image3;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.imageCard}>
        <ImageComponent />
        <Text style={[styles.headingText1, { color: colors.textPrimary }]}>
          Create your own study plan
        </Text>
        <Text style={[styles.headingText2, { color: colors.textSecondary }]}>
          Study according to the study plan, make study more motivated
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.push('Phone');
            }}
            style={[styles.button1, { backgroundColor: colors.buttonPrimary }]}
          >
            <Text style={[styles.buttonText1, { color: '#FFFFFF' }]}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button2,
              { borderColor: colors.buttonOutline },
            ]}
          >
            <Text style={[styles.buttonText2, { color: colors.buttonSecondary }]}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Third;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingRight: 15 * scale,
  },
  imageCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40 * scale,
  },
  headingText1: {
    fontSize: 17 * scale,
    fontWeight: 'bold',
    marginBottom: 5 * scale,
  },
  headingText2: {
    fontSize: 14 * scale,
    fontWeight: 'bold',
    width: '90%',
    textAlign: 'center',
  },
  buttonContainer: {
    paddingTop: 10 * scale,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 80 * scale,
    marginLeft: 10 * scale,
  },
  button1: {
    paddingVertical: 10 * scale,
    paddingHorizontal: 20 * scale,
    borderRadius: 8 * scale,
  },
  button2: {
    borderWidth: 3,
    paddingVertical: 10 * scale,
    paddingHorizontal: 20 * scale,
    borderRadius: 10 * scale,
    marginLeft: 20 * scale,
  },
  buttonText1: {
    fontSize: 14 * scale,
    fontWeight: 'bold',
  },
  buttonText2: {
    fontSize: 14 * scale,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
