import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';


// create navigator component
const OrderScreen = props => {
  const Arr = [
    {id: 1, title: "Pancakes and Eggs", price: "$11.99"},
    {id: 2, title: "Turkey and Cheese Omelette", price: "$10.50"},
    {id: 3, title: "Chilaquiles", price: "$11.50"},
  ];

    return (
      <FlatList 
      data = {Arr} 
      renderItem={itemData =>
          <View style = {styles.cardContainer}>
            <TouchableOpacity 
              style = {styles.card} 
              onPress={() => {
                props.navigation.navigate("Single Meal", { meal: itemData.item });
              }}> 
              <Text style = {styles.title}>{itemData.item.title}</Text>
              <Text style = {styles.price}>{itemData.item.price}</Text>
            </TouchableOpacity>
          </View>
        } />
    )
  }
  
  const styles = StyleSheet.create({
      card: {
        flex: 1,
        backgroundColor: '#F97068',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
      },
      title:{
        color: '#eee',
      }
    });
    
  



export default OrderScreen;
