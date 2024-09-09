import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
  View,
  Modal,
  ImageBackground,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Close from '../../assets/svg/close';
import Success from './Success';

const {width} = Dimensions.get('window');
const scale = width / 320;

const Otp = ({navigation, route}) => {
  const { phoneNumber = '', otp = '' } = route.params || {};
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();
  const et6 = useRef();

  const [f1, setF1] = useState('');
  const [f2, setF2] = useState('');
  const [f3, setF3] = useState('');
  const [f4, setF4] = useState('');
  const [f5, setF5] = useState('');
  const [f6, setF6] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleOtpVerification = () => {
    const originalOtp = String(otp);
    const userOtp = f1 + f2 + f3 + f4 + f5 + f6;

    if (userOtp === userOtp) {
      setModalVisible(true); 
    } else {
      console.log('Denied');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{width: 20 * scale, height: 20 * scale}}>
          <Close />
        </TouchableOpacity>
        <Text style={styles.txt1}>Verify Phone</Text>
      </View>

      <Text style={styles.txt2}>Code is sent to {phoneNumber}</Text>

      <View style={styles.layout}>
        <TextInput
          ref={et1}
          style={[
            styles.inputView,
            {borderColor: f1.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f1}
          onChangeText={txt => {
            setF1(txt);
            if (txt.length === 1) et2.current.focus();
          }}
        />
        <TextInput
          ref={et2}
          style={[
            styles.inputView,
            {borderColor: f2.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f2}
          onChangeText={txt => {
            setF2(txt);
            if (txt.length === 1) et3.current.focus();
          }}
        />
        <TextInput
          ref={et3}
          style={[
            styles.inputView,
            {borderColor: f3.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f3}
          onChangeText={txt => {
            setF3(txt);
            if (txt.length === 1) et4.current.focus();
          }}
        />
        <TextInput
          ref={et4}
          style={[
            styles.inputView,
            {borderColor: f4.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f4}
          onChangeText={txt => {
            setF4(txt);
            if (txt.length === 1) et5.current.focus();
          }}
        />
        <TextInput
          ref={et5}
          style={[
            styles.inputView,
            {borderColor: f5.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f5}
          onChangeText={txt => {
            setF5(txt);
            if (txt.length === 1) et6.current.focus();
          }}
        />
        <TextInput
          ref={et6}
          style={[
            styles.inputView,
            {borderColor: f6.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f6}
          onChangeText={txt => {
            setF6(txt);
          }}
        />
      </View>

      <TouchableOpacity
        style={[
          styles.btn,
          {
            backgroundColor:
              f1 && f2 && f3 && f4 && f5 && f6 ? 'blue' : '#949494',
          },
        ]}
        disabled={!f1 || !f2 || !f3 || !f4 || !f5 || !f6}
        onPress={handleOtpVerification}>
        <Text style={styles.txt3}>Verify</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
            <Success />
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => {setModalVisible(false)
                navigation.push("Home")
              }}>
              <Text style={styles.closeModalText}>Done</Text>
            </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  titleBar: {
    flexDirection: 'row',
    paddingVertical: 20 * scale,
    paddingHorizontal: 10 * scale,
  },
  txt1: {
    color: '#000000',
    fontSize: 17 * scale,
    paddingHorizontal: 100 * scale,
    fontWeight: '700',
  },
  txt2: {
    color: '#858597',
    fontSize: 17 * scale,
    fontWeight: '500',
    alignSelf: 'center',
    marginTop: 60 * scale,
  },
  inputView: {
    borderWidth: 1,
    borderRadius: 10,
    width: 30 * scale,
    height: 30 * scale,
    color: '#000000',
    textAlign: 'center',
  },
  layout: {
    marginTop: 25 * scale,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btn: {
    width: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10 * scale,
    paddingVertical: 5 * scale,
    marginTop: 20 * scale,
  },
  txt3: {
    color: '#FFFFFF',
    fontSize: 15 * scale,
    fontWeight: '500',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  blurBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeModalButton: {
    marginTop: 10 * scale,
    backgroundColor: '#3D5CFF',
    paddingVertical: 10 * scale,
    paddingHorizontal: 50 * scale,
    borderRadius: 10 * scale,
  },
  closeModalText: {
    color: '#FFFFFF',
    fontSize: 16 * scale,
    fontWeight: '600',
  },
});
