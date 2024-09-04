import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import First from './components/Page/First'
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import Second from './components/Page/Second';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

 function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Second" screenOptions={{headerShown:false}}> 
      <Stack.Screen name ="First" component={First} />
      <Stack.Screen name ="Second" component={Second} />
    </Stack.Navigator>
    </NavigationContainer>
  
  )
}
export default App
const styles = StyleSheet.create({})