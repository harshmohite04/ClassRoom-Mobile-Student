import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Modal,
  useColorScheme,
} from 'react-native';
import React, { useState } from 'react';
import Image1 from '../../assets/svg/Acc_Pic';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');
const scale = width / 320;

const lightTheme = {
  backgroundColor: '#FFFFFF',
  textColor: '#1F1F39',
  bottomBarBackground: '#FFFFFF',
  bottomBarBorderColor: '#DDD',
};

const darkTheme = {
  backgroundColor: '#1F1F39',
  textColor: '#FFFFFF',
  bottomBarBackground: '#1F1F39',
  bottomBarBorderColor: '#333',
};

const Account = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const theme = isDarkMode ? darkTheme : lightTheme;

  const handleLogout = async () => {
    await AsyncStorage.setItem('alreadyLaunched', 'false');
    navigation.reset({
      index: 0,
      routes: [{ name: 'First' }],
    });
  };

  return (
    <View style={[styles.Container, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.AccountText}>
        <Text style={[styles.StylingAccount, { color: theme.textColor }]}>
          Account
        </Text>
      </View>
      <View style={styles.ImageCard}>
        <TouchableOpacity>
          <Image1 size={120 * scale} />
        </TouchableOpacity>
      </View>
      <View style={styles.Touchables}>
        <TouchableOpacity>
          <Text style={[styles.TouchablesText, { color: theme.textColor }]}>
            Favourite
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.TouchablesText, { color: theme.textColor }]}>
            Edit Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.TouchablesText, { color: theme.textColor }]}>
            Settings and Privacy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.TouchablesText, { color: theme.textColor }]}>
            Help
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={[styles.txt1]}>LogOut</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for Logout Confirmation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.modalText, { color: theme.textColor }]}>Are you sure you want to log out?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleLogout}
              >
                <Text style={styles.modalButtonText}>Yes, Log Out</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingVertical: 25 * scale,
  },
  AccountText: {},
  StylingAccount: {
    fontSize: 25 * scale,
    fontWeight: 'bold',
    paddingLeft: 15 * scale,
  },
  ImageCard: {
    marginTop: 20 * scale,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10 * scale,
  },
  Touchables: {
    flex: 1,
    paddingTop: 20 * scale,
    paddingLeft: 20 * scale,
  },
  TouchablesText: {
    fontSize: 15 * scale,
    fontWeight: 'bold',
    paddingTop: 25 * scale,
  },
  txt1: {
    fontSize: 15 * scale,
    fontWeight: 'bold',
    paddingTop: 25 * scale,
    color: '#ff0000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20 * scale,
    borderRadius: 12 * scale,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 18 * scale,
    fontWeight: 'bold',
    marginBottom: 20 * scale,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalButton: {
    backgroundColor: '#3D5CFF',
    paddingVertical: 10 * scale,
    paddingHorizontal: 20 * scale,
    borderRadius: 8 * scale,
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
