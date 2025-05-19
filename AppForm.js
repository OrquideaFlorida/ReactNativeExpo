import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function AppForm(){
    return (
        <View style={StyleSheet.conainer}>
        <Text>Form</Text>
        <StatusBar style="light"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D933600',
        alignItens: 'center',
        justifyContent: 'center',
    },
});

