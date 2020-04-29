import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SingleMealScreen = props =>{
    console.log(props.route);
    return (
        <View style = {styles.container}>
            <Text>Thhis is my Single meal Screen!</Text>
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