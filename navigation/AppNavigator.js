import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/colors';


// create navigator component
const BlankView = () => {
  return (
    <View style={styles.container}>
      <Text>Hellooooo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  


// Creating my Tab Stack
const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
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
        name='New Order'
        component={BlankView}
        options={() => ({
          tabBarIcon: ({ color }) =>
            <Ionicons name='ios-star' size={25} color={color} />
        })} />

      <Tabs.Screen
        name='View Orders'
        component={BlankView}
        options={() => ({
          tabBarIcon: ({ color }) =>
            <Ionicons name='ios-star' size={25} color={color} />
        })} />

      <Tabs.Screen
        name='Profile'
        component={BlankView}
        options={() => ({
          tabBarIcon: ({ color }) =>
            <Ionicons name='ios-person' size={25} color={color} />
        })} />
    </Tabs.Navigator>
  )
}

export default TabNavigator;
