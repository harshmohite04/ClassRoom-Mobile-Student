import {
  Dimensions,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
const {width} = Dimensions.get('window');
const scale = width / 320;

const LoginPage = ({navigation}) => {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email Field Is Required'),
    password: Yup.string()
      .min(8, 'Password should be atleast 8 character')
      .max(24, 'Password must not exceed above 24 character')
      .required('Password Field Is Required'),
  });

  const handleSubmit = (values) => {
    console.log(values);

    // navigation.push('Home');
  };

  const forgetPassword = () => {
    // Forget Pass logic / API call from MongoDB
  };
  const mail=()=>{
    // redirect to our email
    console.log("Hello there")
  }
  return (
    <View style={styles.container}>
      <View style={styles.flex1}>
        <Text style={styles.txt1}>Log In</Text>
      </View>
      <View style={styles.flex2}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}>
          {({
            handleChange,
            handleBlur,
            errors,
            handleSubmit,
            values,
            touched,
          }) => (
            <View style={styles.txtBookMain}>
              <Text style={styles.txt}>Your Email</Text>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.txtBox}
              />
              {errors.email && touched.email && (
                <Text style={{color: 'red'}}>{errors.email}</Text>
              )}
              <Text style={styles.txt}>Password</Text>
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={styles.txtBox}
              />
              {errors.password && touched.password && (
                <Text style={{color: 'red'}}>{errors.password}</Text>
              )}
              <TouchableOpacity style={styles.forget} onPress={forgetPassword}>
                <Text style={styles.forgetTxt}>Forget Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                <Text style={styles.btnTxt}>Log In</Text>
              </TouchableOpacity>
              <Text style={styles.txt2}>
                Don't have an account? Try Contacting <Text onPress={mail} style={styles.txt3}>Owner</Text>
              </Text>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  flex1: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#f0f0f2',
  },
  flex2: {
    flex: 5,
    backgroundColor: '#ffffff',
    width: '80%',
    alignSelf: 'center',
    marginTop: 20 * scale,
  },
  txt1: {
    color: '#000000',
    fontSize: 27 * scale,
    fontWeight: 'bold',
    paddingBottom: 10 * scale,
    paddingLeft: 10 * scale,
  },
  txtBookMain: {
    alignItems: 'center',
  },
  txtBox: {
    borderWidth: 1,
    width: '90%',
    borderRadius: 10 * scale,
    paddingHorizontal:10*scale
  },
  btn: {
    backgroundColor: '#3D5CFF',
    paddingHorizontal: 35 * scale,
    paddingVertical: 10 * scale,
    borderRadius: 10 * scale,
    marginTop: 15 * scale,
  },
  btnTxt: {
    color: '#ffffff',
    fontSize: 15 * scale,
    fontWeight: '700',
  },
  txt: {
    color: '#000000',
    alignSelf: 'flex-start',
    fontSize: 13 * scale,
    marginTop: 10 * scale,
  },
  forget: {
    alignSelf: 'flex-end',
    marginTop: 5 * scale,
  },
  forgetTxt: {
    textDecorationLine: 'underline',
    color: '#000000',
    fontSize: 12 * scale,
  },
  txt2:{
    color:'#000000',
    fontSize:11*scale,
    marginTop:10*scale
  },
  txt3:{
    color:'#3D5CFF',
    fontSize:12*scale,
    textDecorationLine:'underline',
    fontWeight:'700'
  }
});
