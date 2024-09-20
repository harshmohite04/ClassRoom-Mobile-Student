import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  useColorScheme,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import Image1 from '../../assets/svg/Acc_Pic';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Success from './Succes(Logout)'; 

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
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [modalVisible, setModalVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLogout = async () => {
    setModalVisible(true); // Open confirmation modal
  };

  const confirmLogout = async () => {
    setModalVisible(false);
    setShowSuccess(true); // Show success modal

    setTimeout(async () => {
      setShowSuccess(false);
      await AsyncStorage.setItem('alreadyLaunched', 'false');

      navigation.reset({
        index: 0,
        routes: [{ name: 'First' }],
      });
    }, 3000); 
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
        <TouchableOpacity onPress={handleLogout}>
          <Text style={[styles.txt1]}>LogOut</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to log out?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={confirmLogout}
              >
                <Text style={styles.modalButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Success Modal */}
      {showSuccess && (
        <Modal transparent={true} animationType="fade">
          <View style={styles.successModalContainer}>
            <Success />
          </View>
        </Modal>
      )}
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10 * scale,
    padding: 20 * scale,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18 * scale,
    fontWeight: 'bold',
    marginBottom: 20 * scale,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: '#3D5CFF',
    padding: 10 * scale,
    borderRadius: 10 * scale,
    marginHorizontal: 10 * scale,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 14 * scale,
    fontWeight: 'bold',
  },
  successModalContainer: {
    flex: 1,
    justifyContent: 'center',  // Center the success modal vertically
    alignItems: 'center',       // Center the success modal horizontally
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Optional background overlay
  },
});
