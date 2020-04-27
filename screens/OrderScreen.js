import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


// create navigator component
const OrderScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Order Screen Here</Text>
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
    
  



export default OrderScreen;
