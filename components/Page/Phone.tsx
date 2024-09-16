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
import PhoneImg from '../../assets/svg/Phone1';
import DarkPhone1 from '../../assets/svg/Phone1(Dark)';
import { TextInput } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import { Formik } from 'formik';

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

const Phone = ({navigation,route}) => {
  const colorScheme = useColorScheme();  
  const isDarkMode = colorScheme === 'dark';
  const colors = isDarkMode ? darkTheme : lightTheme;
  const PhoneIcon = isDarkMode ? DarkPhone1 : PhoneImg;

  const phoneSchema = Yup.object().shape({
    phoneLength: Yup.string()
      .length(10, "Must be 10 numbers")
      .required("Required Field"),
  });

  const handleSubmit = async (values) => {
    try {
      const phoneNumber = values.phoneLength;
      const url = `https://1cc1983d-43bb-4afc-abd4-7d74292682e6-00-1m5jpetysfpcm.sisko.replit.dev:3000/otp?number=${phoneNumber}`; // http is not working but android Manifest is chutiya , plz use https
      console.log("heelo")                                                                                                        // to use go to classRoom backend on the it using replit or any other which provide https or Just Call Harsh (and say bkl)
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`HTTP Error: ${response.status} - ${errorMessage}`);
      }
      
      const data = await response.json();
      const otp = data.otp
      console.log(data);
      console.log(phoneNumber);
      navigation.push('Otp', { phoneNumber,otp});
    } catch (error) {
      console.error('Error fetching OTP:', error.message || error);
    }
  };
  

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.txt1, { color: colors.textPrimary }]}>Continue with Phone</Text>
      <PhoneIcon size={110*scale}/>
      <View style={styles.container2}>
        <Formik
          initialValues={{ phoneLength: '9356836581' }}
          validationSchema={phoneSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <View>
              <Text style={[styles.phoneText, { color: colors.textPrimary }]}>
                Enter Your Phone Number
              </Text>
              <TextInput
                onChangeText={handleChange('phoneLength')}
                value={values.phoneLength}
                placeholder="93568365221"
                keyboardType='numeric'
                placeholderTextColor='#858597'
                style={styles.input}
              />
              {errors.phoneLength && touched.phoneLength && (
                <Text style={{ color: 'red' }}>{errors.phoneLength}</Text>
              )}
              <TouchableOpacity onPress={handleSubmit} style={styles.center}>
                <View style={[styles.getOtp, { backgroundColor: colors.buttonPrimary }]}>
                  <Text style={styles.getOtptxt}>Continue</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default Phone;

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
    width:'40%',
    alignItems:'center'
  },
  getOtptxt: {
    color: '#FFFFFF',
    fontSize: 12 * scale,
    fontWeight: '600',
  },
  center:{
    alignItems:'center'
  }
});
