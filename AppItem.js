import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function AppItem(props){
    return (
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.textItem}>{props.item}</Text>
            <View style={StyleSheet.buttonContainer}>
                <TouchableOpacity style={StyleSheet.deleteButton}>
                    <Text style={StyleSheet.buttonText}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity syle={StyleSheet.editButton}>
                    <Text style={style.buttonText}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 20,
        width: '100%'
    },
    buttonContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 10,
        marginTop: 10,
    },
    editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation:10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center' 
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textItem: {
        fontSize: 20,
    }
});