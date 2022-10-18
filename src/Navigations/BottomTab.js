import { Image, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from '../Views/Home/Home';
import TimeLine from '../Views/TimeLine/TimeLine';
import Message from '../Views/Message/Message';
import Account from '../Views/Account/Account';
import { ICONS } from '../Constants/Icons';
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#466FFF',
      tabBarInactiveTintColor: '#A0A3BD',
      tabBarLabelStyle: {
        fontSize: 13,
      }

    }}>
      <Tab.Screen 
      name="Home" 
      component={Home}
      options={{tabBarIcon:()=>(
        <Image source={ICONS.ic_home}/>
      )}}
       />
      <Tab.Screen name="Timeline" component={TimeLine} />
      <Tab.Screen name="Messages" component={Message} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({

})