import { StyleSheet, Text, View, Dimensions, useColorScheme, TouchableOpacity } from 'react-native';
import React from 'react';
import ImageLight from '../../assets/svg/NoNetwork1';
import ImageDark from '../../assets/svg/NoNetwork(dark)';

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
  background: '#1F1F39',
  textPrimary: '#FFFFFF',
  textSecondary: '#A9A9A9',
  buttonBackground: '#3D5CFF',
  buttonText: '#FFFFFF',
};

export default function NoNetwork() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  const ImageComponent = colorScheme === 'dark' ? ImageDark : ImageLight;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.ImageCard}>
        <ImageComponent />
      </View>
      <View>
        <Text style={[styles.TextStyle1, { color: theme.textPrimary }]}>
           No Network!
        </Text>
        <Text style={[styles.TextStyle2, { color: theme.textSecondary }]}>
          Please check your internet 
          connection and try again
        </Text>
      </View>

      
      <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonBackground }]}>
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
          TRY AGAIN
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 200 * scale,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyle: {
    height: 150 * scale, // Adjust the size as per your requirement
    width: 150 * scale,
    alignSelf: 'center',
  },
  TextCard: {
    textAlign: 'center',
  },
  TextStyle1: {
    textAlign: 'center',
    fontSize: 17 * scale,
    fontWeight: 'bold',
  },
  TextStyle2: {
    textAlign: 'center',
    fontSize: 12 * scale,
    fontWeight: 'bold',
    marginTop: 10 * scale,
  },
  button: {
    marginTop: 20 * scale, 
    paddingVertical: 12 * scale, 
    paddingHorizontal: 50 * scale, 
    borderRadius: 12 * scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16 * scale, 
    fontWeight: 'bold',
  },
});
