import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/colors';


// create navigator component
const BlankView = () => {
  return (
    <Text>Hellooooo</Text>
  )
}


// Creating my Tab Stack
const Tabs = createBottomTabNavigator();

const MealTabNavigator = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: '#999',
      }}>
      <Tabs.Screen
        name='Home'
        component={BlankView}
        options={() => ({
          tabBarIcon: ({ color }) => 
            <Ionicons name='ios-restaurant' size={25} color={color} />
        })} />
      
      <Tabs.Screen
        name='Favorites'
        component={BlankView}
        options={() => ({
          tabBarIcon: ({ color }) =>
            <Ionicons name='ios-star' size={25} color={color} />
        })} />

      <Tabs.Screen
        name='Orders'
        component={BlankView}
        options={() => ({
          tabBarIcon: ({ color }) =>
            <Ionicons name='ios-star' size={25} color={color} />
        })} />
    </Tabs.Navigator>
  )
}

export default MealTabNavigator;
