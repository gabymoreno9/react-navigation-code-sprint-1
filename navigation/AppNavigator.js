import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import OrderScreen from '../screens/OrderScreen';
import ViewOrderScreen from '../screens/ViewOrderScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import SingleMealScreen from '../screens/SingleMeal';


import Colors from '../constants/colors';

// Orders Stack to inject into my Tabs
const OrderStack = createStackNavigator();

const OrderNavigator = () => {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="Welcome to Bruce's Diner" component={OrderScreen} />
      <OrderStack.Screen name="Single Meal" component={SingleMealScreen} />
    </OrderStack.Navigator>
  );
};


// create navigator component
const BlankView = () => {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>Hello and Welcome To Bruce's Diner</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#212738',
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
       color: '#fff',     
    }
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
        component={OrderNavigator}
        options={() => ({
          tabBarIcon: ({ color }) =>
            <Ionicons name='ios-pizza' size={25} color={color} />
        })} />

      <Tabs.Screen
        name='View Orders'
        component={ViewOrderScreen}
        options={() => ({
          tabBarIcon: ({ color }) =>
            <Ionicons name='ios-list' size={25} color={color} />
        })} />

      <Tabs.Screen
        name='Profile'
        component={UserProfileScreen}
        options={() => ({
          tabBarIcon: ({ color }) =>
            <Ionicons name='ios-person' size={25} color={color} />
        })} />
    </Tabs.Navigator>
  )
}

export default TabNavigator;
