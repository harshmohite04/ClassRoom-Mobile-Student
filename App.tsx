import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import First from './components/Page/First';
import Second from './components/Page/Second';
import Phone from './components/Page/Phone';
import Third from './components/Page/Third';
import Otp from './components/Page/Otp';
import NotiFy from './components/Page/NoNotiFy';
import NoNet from './components/Page/NoNetwork';
import NoVideo from './components/Page/NoVideos';
import Account from './components/Page/Account';
import LoginPage from './components/Page/LoginPage';
import Home from './components/Page/Home';
import Success from './components/Page/Success';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CourseIcon from './assets/svg/Course_icon';
import Logo from './assets/svg/Logo';
import Phone1 from './assets/svg/Phone1';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useEffect(() => {
    // Check if the app is being launched for the first time
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        setIsFirstLaunch(false);
      } else {
        setIsFirstLaunch(true);
      }
    });
  }, []);

  const TabNavigator = () => {
    return (
      <Tab.Navigator
      initialRouteName={"Home"}
      
        screenOptions={({route}) => ({
          headerShown:false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {

                return focused?<Logo/>:<Phone1/>
            } else if (route.name === 'Account') {
                 return <Phone1/>
            }

  
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    );
  };
  const StackNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="First"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Third" component={Third} />
        <Stack.Screen name="Phone" component={Phone} />
        <Stack.Screen name="Otp">
          {props => <Otp {...props} setIsFirstLaunch={setIsFirstLaunch} />}
        </Stack.Screen>

        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Notify" component={NotiFy} />
        <Stack.Screen name="NoNet" component={NoNet} />
        <Stack.Screen name="NoVideo" component={NoVideo} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Tab" component={TabNavigator} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
<<<<<<< HEAD
    <Stack.Navigator initialRouteName="Account" screenOptions={{headerShown:false}}> 
      <Stack.Screen name ="First" component={First} />
      <Stack.Screen name ="Second" component={Second} />
      <Stack.Screen name ="Third" component={Third} />
      <Stack.Screen name ="Phone" component={Phone} />
      <Stack.Screen name ="Otp" component={Otp} />
      <Stack.Screen name ="Success" component={Success} />
      <Stack.Screen name ="Notify" component={NotiFy} />
      <Stack.Screen name ="NoNet" component={NoNet} />
      <Stack.Screen name ="NoVideo" component={NoVideo} />
      <Stack.Screen name ="Account" component={Account} />
      <Stack.Screen name ="Login" component={LoginPage} />
      <Stack.Screen name ="Home" component={Home} />
    


    </Stack.Navigator>
=======
      {isFirstLaunch ? <TabNavigator /> : <StackNavigator />}
>>>>>>> 0d132a2147780dbfb0e175617a1baba5b1706325
    </NavigationContainer>
  );
}
export default App;
const styles = StyleSheet.create({});
