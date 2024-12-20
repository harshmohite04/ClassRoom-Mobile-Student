import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  useColorScheme,
} from 'react-native';
import React, {useEffect,useRef} from 'react';
import SecondImg from '../../assets/svg/Second(image)'; // Light mode image
import DarkImage2 from '../../assets/svg/Second(imagedark)';

const {width} = Dimensions.get('window');
const scale = width / 320;

const lightTheme = {
  background: '#FFFFFF',
  textPrimary: '#1F1F39',
  textSecondary: '#858597',
  skipText: '#1F1F39',
};

const darkTheme = {
  background: '#1F1F39',
  textPrimary: '#FFFFFF',
  textSecondary: '#A9A9A9',
  skipText: '#FFFFFF',
};

const Second = ({navigation}) => {
  const colorScheme = useColorScheme();
  const timerRef = useRef(null);
  const isDarkMode = colorScheme === 'dark';
  const colors = isDarkMode ? darkTheme : lightTheme;
  const ImageComponent = isDarkMode ? DarkImage2 : SecondImg;

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      navigation.push('Third');
    }, 3000);
  }, [navigation]);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <TouchableOpacity
        onPress={() => {
          navigation.push('Third');
          clearTimeout(timerRef.current);
        }}>
        <Text style={[styles.txt3, {color: colors.skipText}]}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.middle}>
        <ImageComponent size={200*scale}/>
        <Text style={[styles.txt1, {color: colors.textPrimary}]}>
          Quick and easy learning
        </Text>
        <Text style={[styles.txt2, {color: colors.textSecondary}]}>
          Easy and fast learning at any time to help you improve various skills
        </Text>
      </View>
    </View>
  );
};

export default Second;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15 * scale,
    paddingVertical: 15 * scale,
    flex: 1,
  },
  txt1: {
    fontSize: 15 * scale,
    fontWeight: 'bold',
    paddingVertical: 10 * scale,
    textAlign: 'center',
    paddingTop: 50 * scale,
  },
  txt2: {
    fontSize: 11 * scale,
    paddingVertical: 10 * scale,
    textAlign: 'center',
  },
  txt3: {
    fontSize: 12 * scale,
    textAlign: 'right',
    fontWeight: 'bold',
    paddingRight: 10 * scale,
    textDecorationLine: 'underline',
  },
  middle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
