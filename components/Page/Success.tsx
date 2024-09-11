import { StyleSheet, Text, View, Dimensions, TouchableOpacity, useColorScheme} from 'react-native';
import React from 'react';
import Image1 from '../../assets/svg/Tick';

const { width } = Dimensions.get('window');
const scale = width / 320;

const lightTheme = {
  background: '#FFFFFF',
  textPrimary: '#1F1F39',
  textSecondary: '#858597',
  buttonBackground: '#3D5CFF',
  buttonText: '#FFFFFF',
};

const darkTheme = {
  background: '#2F2F42',
  textPrimary: '#FFFFFF',
  textSecondary: '#A9A9A9',
  buttonBackground: '#3D5CFF', 
  buttonText: '#FFFFFF',
};

const Success = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={[styles.middleContainer, { backgroundColor: theme.background }]}>
      <View style={styles.ImageCard}>
        <Image1 size={70*scale}/>
      </View>
      <Text style={[styles.txt1, { color: theme.textPrimary }]}>Success</Text>
      <Text style={[styles.txt2, { color: theme.textSecondary }]}>
        Congratulations, you have completed your registration!
      </Text>

      <TouchableOpacity
        style={[styles.doneButton, { backgroundColor: theme.buttonBackground }]}
        onPress={() => {
          navigation.navigate('Home')}
      }  
      >
        <Text style={[styles.doneButtonText, { color: theme.buttonText }]}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  middleContainer: {
    height: 250 * scale,
    width: 250 * scale,
    borderRadius: 12 * scale,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20 * scale,
  },
  ImageCard: {
    alignItems: 'center',
    marginTop: 10 * scale,
  },
  txt1: {
    fontSize: 15 * scale,
    fontWeight: 'bold',
    marginTop: 10 * scale,
  },
  txt2: {
    marginTop: 10 * scale,
    fontSize: 12 * scale,
    paddingHorizontal: 20 * scale,
    textAlign: 'center',
  },
  doneButton: {
    marginTop: 10 * scale,
    paddingVertical: 12 * scale,
    paddingHorizontal: 80 * scale,
    borderRadius: 12 * scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneButtonText: {
    fontSize: 14 * scale,
    fontWeight: 'bold',
  },
});
