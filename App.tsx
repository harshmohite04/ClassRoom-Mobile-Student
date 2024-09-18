import {Dimensions, StyleSheet} from 'react-native';
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
import Account from './components/Page/Account';
import LoginPage from './components/Page/LoginPage';
import Home from './components/Page/Home';
import Success from './components/Page/Success';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeLight from './assets/svg/HomeLight';
import HomeDark from './assets/svg/HomeDark';
import Search from './components/Page/Search';
import Message from './components/Page/Message';
import Course from './components/Page/Course';
import CourseDark from './assets/svg/CourseDark';
import CourseLight from './assets/svg/CourseLight';
import SearchLight from './assets/svg/SearchLight';
import MessageDark from './assets/svg/Messagedark';
import AccountDark from './assets/svg/AccountDark';
import AccountWhite from './assets/svg/AccountWhite';
import Dashboard from './components/Page/Dashboard'
import MessageLight from './assets/svg/MessageLight';
import SplashScreen from './components/compo/Splash';
import DrawerNavigator from './components/Page/Home';
const {width} = Dimensions.get('window');
const scale = width / 320;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null || value === 'false') {
        setIsFirstLaunch(false);
      } else {
        setIsFirstLaunch(true);
      }
      setLoading(false);
    });
  }, []);


  const TabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused}) => {
            if (route.name === 'Home') {
              return focused ? <HomeDark size={20 * scale} /> : <HomeLight size={20 * scale} />;
            } else if (route.name === 'Course') {
              return focused ? <CourseDark size={20 * scale} /> : <CourseLight size={20 * scale} />;
            } else if (route.name === 'Search') {
              return <SearchLight size={20 * scale} />;
            } else if (route.name === 'Message') {
              return focused ? <MessageDark size={20 * scale} /> : <MessageLight size={20 * scale} />;
            } else if (route.name === 'Account') {
              return focused ? <AccountDark size={20 * scale} /> : <AccountWhite size={20 * scale} />;
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            height: 55 * scale,
            borderTopWidth: 0 * scale,
            elevation: 10 * scale,
            shadowOpacity: 0.1 * scale,
            paddingBottom: 5 * scale,
          },
          tabBarLabelStyle: {
            fontSize: 10 * scale,
            fontWeight: '600',
          },
          tabBarIconStyle: {
            marginTop: 5 * scale,
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Course" component={Course} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Message" component={Message} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    );
  };

  const StackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="Acc" screenOptions={{headerShown: false}}>
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Third" component={Third} />
        <Stack.Screen name="Phone" component={Phone} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Otp">{props => <Otp {...props} setIsFirstLaunch={setIsFirstLaunch} />}</Stack.Screen>
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Login">
        
          {props => <LoginPage {...props} setIsFirstLaunch={setIsFirstLaunch} />}
        </Stack.Screen>
        <Stack.Screen name="Tab" component={Home} />
      </Stack.Navigator>
    );
  };

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {isFirstLaunch ? <TabNavigator /> : <StackNavigator />}
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({});
