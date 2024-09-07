import { StyleSheet, Text, View  } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import First from './components/Page/First'
import Second from './components/Page/Second';
import Phone from './components/Page/Phone';
import Third from './components/Page/Third';
import NotiFy from './components/Page/NoNotiFy';
import NoNet from './components/Page/NoNetwork';
import NoVideo from './components/Page/NoVideos'
const Stack = createStackNavigator();

 function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="NoVideo" screenOptions={{headerShown:false}}> 
      <Stack.Screen name ="First" component={First} />
      <Stack.Screen name ="Second" component={Second} />
      <Stack.Screen name ="Third" component={Third} />
      <Stack.Screen name ="Phone" component={Phone} />
      <Stack.Screen name ="Notify" component={NotiFy} />
      <Stack.Screen name ="NoNet" component={NoNet} />
      <Stack.Screen name ="NoVideo" component={NoVideo} />

    </Stack.Navigator>
    </NavigationContainer>

  )
}
export default App
const styles = StyleSheet.create({})