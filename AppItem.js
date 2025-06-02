import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Platform } from 'react-native';
import Database from './Database'
import { Feather as Icon } from '@expo/vector-icons';

export default function AppItem(props) {
    async function handleEditPress() {
        const item = await Database.getItem(props.id);
        props.navigation.navigate("AppForm", item);
    }

    function handleDeletePress() {
        
        const SO = Platform.SO;
        if(SO == 'android' || SO == 'ios'){
            // O usuário está usando Android ou IOs
        
        Alert.alert(
            "Atençao",
            "Você tem certeza que deseja excluir este item?",
            [
                {
                    text: "Não",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { 
                    text: "Sim", onPress: () => {
                        Database.deleteItem(props.id)
                            .then(response => props.navigation.navigate("AppList", { id: props.id}));
                    }
                }
            ],
            { cancelable: false }
            );
    
    } else {
     
        // O usuário não está usando  IOS ou Android
        if(window.confirm('Você tem certeza que deseja excluir este item?')){
            Database.deleteItem(props.id)
                .then(response => props.navigation.navigate('AppList', {id: props.id}));
        } 
    }
}
    return (
        <View style={styles.container}>
            <Text style={styles.textItem}>{props.item}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={handleDeletePress}>
                    <Icon name="trash" color="white" size={18} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={handleEditPress}>
                    <Icon name="edit" color="white" size={18} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        elevation: 10,
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