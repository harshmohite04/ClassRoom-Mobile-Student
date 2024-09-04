import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const {width} = Dimensions.get('window');
const scale = width / 320;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cont1}>
        <Text style={styles.txt1}>Sign Up</Text>
        <Text style={styles.txt3}>Enter your details below & free sign up</Text>
      </View>
      <View style={styles.cont2}>
        <Text style={styles.txt2}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="eg. roycee@gmail.com"
          placeholderTextColor={'#858597'}
        />
        <Text style={styles.txt4}>Password</Text>
        <TextInput
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Password Should be atleast 8 charaters long"
          placeholderTextColor="#aaa"
        />

        <TouchableOpacity onPress={() => {}} style={styles.createAccView}>
          <View style={styles.createAcc}>
            <Text style={styles.createAccTxt}>Create account</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.terms}>
          {/* CheckBox create kar */}
          <Text>
            By creating an account you have to agree with our them &
            condication.
          </Text>
        </View>
        <View style={styles.already}>
          <Text style={styles.txt5}>Already have an account? </Text>
          <TouchableOpacity
          onPress={()=>{

          }}>

          <Text style={styles.txt6}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cont1: {
    flex: 1,
    backgroundColor: '#F0F0F2',
    paddingLeft: 20 * scale,
    justifyContent: 'flex-end',
    paddingBottom: 10 * scale,
  },
  cont2: {
    flex: 4,
    paddingHorizontal: 15 * scale,
    paddingVertical: 10 * scale,
  },
  txt1: {
    fontSize: 32 * scale,
    color: '#000000',
    fontWeight: '900',
  },
  txt2: {
    fontSize: 15 * scale,
  },
  txt4: {
    fontSize: 15 * scale,
    paddingTop: 15 * scale,
  },
  txt3: {
    fontSize: 12 * scale,
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 20 * scale,
    paddingHorizontal: 10 * scale,
  },
  icon: {
    marginLeft: 10,
  },
  createAcc: {
    width: '80%',
    height: 40 * scale,
    backgroundColor: '#3D5CFF',
    alignSelf: 'center',
    borderRadius: 10 * scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccTxt: {
    fontSize: 18 * scale,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  createAccView: {
    marginVertical: 15 * scale,
  },
  terms: {
    width: '80%',
    alignSelf: 'center',
  },
  already: {
    alignSelf: 'center',
    flexDirection: 'row',
    paddingTop: 10 * scale,
  },
  txt5: {
    fontSize: 12 * scale,
  },
  txt6: {
    fontSize: 12 * scale,
    color:'#3D5CFF',
    fontWeight:'900',
    borderBottomWidth:1.5*scale,
    borderColor:'#3D5CFF'
  },
});
