import { StyleSheet, Text, View, Dimensions, useColorScheme } from 'react-native'
import React from 'react'
import ImageLight from '../../assets/svg/NoNotification' // Light mode image
import ImageDark from '../../assets/svg/NoNotifications(dark)' // Dark mode image

const { width } = Dimensions.get('window');
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

export default function NoNotiFy() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  const Image = colorScheme === 'dark' ? ImageDark : ImageLight;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.ImageCard}>
        <Image style={styles.ImageStyle} />
      </View>
      <View style={styles.TextCard}>
        <Text style={[styles.TextStyle1, { color: theme.textPrimary }]}>
          No Notifications yet!
        </Text>
        <Text style={[styles.TextStyle2, { color: theme.textSecondary }]}>
          We’ll notify you once we have
          something for you
        </Text>
      </View>
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
});
