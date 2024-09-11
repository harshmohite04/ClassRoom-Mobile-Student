import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  useColorScheme
} from 'react-native';
import React from 'react';
import Img3 from '../../assets/svg/Third(image)';
import DarkImg3 from '../../assets/svg/Third(imageDark)'

const lightTheme = {
  background: '#FFFFFF',
  textPrimary: '#1F1F39',
  textSecondary: '#858597',
  skipText: '#1F1F39',
  buttonBackground: '#3D5CFF',
  buttonText: '#FFFFFF',
  outlineButtonText: '#1F1F39',
  outlineButtonBorder: '#3D5CFF',
};

const darkTheme = {
  background: '#1F1F39',
  textPrimary: '#FFFFFF',
  textSecondary: '#A9A9A9',
  skipText: '#FFFFFF',
  buttonBackground: '#3D5CFF',
  buttonText: '#FFFFFF',
  outlineButtonText: '#FFFFFF',
  outlineButtonBorder: '#3D5CFF',
};

const {width} = Dimensions.get('window');
const scale = width / 320;

const Third = ({navigation}) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const colors = isDarkMode ? darkTheme : lightTheme;
  const ImageComponent = isDarkMode ? DarkImg3 : Img3;

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <ImageComponent size={200 * scale} />
      <Text style={[styles.txt1, {color: colors.textPrimary}]}>Create your own study plan</Text>
      <Text style={[styles.txt2, {color: colors.textSecondary}]}>
        Study according to the study plan, make study more motivated
      </Text>
      <View style={styles.button}>
        <TouchableOpacity
          style={[styles.btn1, {backgroundColor: colors.buttonBackground}]}
          onPress={() => {
            navigation.push('Phone');
          }}>
          <Text style={[styles.txt3, {color: colors.buttonText}]}>Sign Up with Phone Number</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn2,
            {
              borderColor: colors.outlineButtonBorder,
            },
          ]}
          onPress={() => {
            navigation.push('Login');
          }}>
          <Text style={[styles.txt4, {color: colors.outlineButtonText}]}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Third;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt1: {
    fontSize: 15 * scale,
    fontWeight: 'bold',
  },
  txt2: {
    fontSize: 10 * scale,
    fontWeight: '500',
  },
  button: {
    flexDirection: 'row',
    marginTop: 15 * scale,
    marginHorizontal: 50 * scale,
  },
  btn1: {
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
  },
  txt3: {
    fontSize: 13 * scale,
    textAlign: 'center',
  },
  txt4: {
    fontSize: 13 * scale,
    textAlign: 'center',
  },
});
