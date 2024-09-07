import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  View,
  useColorScheme
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PhoneImg from '../../assets/svg/phone1';
import DarkPhone1 from '../../assets/svg/DarkPhone1';
import { TextInput } from 'react-native-gesture-handler';
import * as Yup from 'yup';

const { width } = Dimensions.get('window');
const scale = width / 320;

const lightTheme = {
  background: '#FFFFFF',
  textPrimary: '#1F1F39',
  textSecondary: '#858597',
  buttonPrimary: '#3D5CFF',
  buttonSecondary: '#000000',
  buttonOutline: '#3D5CFF',
  inputBorder: '#000000',
};
const darkTheme = {
  background: '#1F1F39',
  textPrimary: '#FFFFFF',
  textSecondary: '#A9A9A9',
  buttonPrimary: '#4A5AFF',
  buttonSecondary: '#FFFFFF',
  buttonOutline: '#4A5AFF',
  inputBorder: '#FFFFFF',
};

const SignUp = () => {
  const colorScheme = useColorScheme();  
  const isDarkMode = colorScheme === 'dark';
  const colors = isDarkMode ? darkTheme : lightTheme;
  const PhoneIcon = isDarkMode ? DarkPhone1 : PhoneImg;

  const phoneSchema = Yup.object().shape({
    phoneLength: Yup.number()
      .min(10, "Must be 10 numbers")
      .max(10, "Must be 10 numbers")
      .required("Required Field"),
  });
  
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.txt1, { color: colors.textPrimary }]}>Continue with Phone</Text>
      <PhoneIcon />
      <View style={styles.container2}>
        <Text style={[styles.phoneText, { color: colors.textSecondary }]}>
          Enter Your Phone Number
        </Text>
        <TextInput
          style={[
            styles.input,
            { borderColor: colors.inputBorder, color: colors.textPrimary }
          ]}
          onChangeText={setPhone}
          value={phone}
          placeholder="9356835871"
          placeholderTextColor={colors.textSecondary}
          keyboardType="numeric"
        />
        <TouchableOpacity>
          <View style={[styles.getOtp, { backgroundColor: colors.buttonPrimary }]}>
            <Text style={styles.getOtptxt}>Get OTP</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 1 * scale,
  },
  txt1: {
    fontSize: 15 * scale,
    paddingVertical: 20 * scale,
    fontWeight: '700',
  },
  container2: { 
    marginTop: 50 * scale,
    alignItems: 'center',
  },
  phoneText: {
    fontSize: 12 * scale,
  },
  input: {
    borderRadius: 10 * scale,
    borderWidth: 2 * scale,
    marginTop: 10 * scale,
    paddingHorizontal: 10 * scale,
    paddingRight: 150 * scale,
  },
  getOtp: {
    marginVertical: 10 * scale,
    borderRadius: 10 * scale,
    paddingVertical: 10 * scale,
    paddingHorizontal: 20 * scale,
  },
  getOtptxt: {
    color: '#FFFFFF',
    fontSize: 12 * scale,
    fontWeight: '600',
  },
});
