import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SingleMealScreen = props =>{
    console.log(props.route);
    return (
        <View style = {styles.container}>
            <Text>{props.route.params.meal.title}</Text>
            <Text>{props.route.params.meal.price}</Text>
            <Button title="Add to cart" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default SingleMealScreen