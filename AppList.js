import {StatusBar} from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import AppItem from './AppItem'
import Database from './Database'

export default function AppList({route, navigation}) {
    //Entre o function e o return, adicionar os componentes que precisar
    const [items, setItems] = useState([]);
    //REMOVER OS ITENS ADICIONADOS MANUALMENTE PARA O APP TER DADOS PARA EXIBIR
        // {id: 1, quantidade: 5, descricao: 'arroz'},
        // {id: 2, quantidade: 1, descricao: 'feijão'},
        // {id: 3, quantidade: 0.5, descricao: 'lentilha'},
        // {id: 4, quantidade: 1, descricao: 'massa'},
        // {id: 5, quantidade: 1, descricao: 'katchup'},
        // {id: 6, quantidade: 1, descricao: 'queijo-ralado'}
    

    useEffect(() => {
        Database.getItems().then(items => setItems(items));
    }, [route]);

    return (
        <View style={styles.container}>
        <StatusBar style="light"/>
        <Text style={styles.title}>Lista de Compras</Text>
        <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.itemsContainer}>
            {items.map(item => {
                return <AppItem key={item.id} id={item.id} item={item.quantidade + ' de ' + item.descricao} navigation={navigation} />
            }) }
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D93600',
        alignItens: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20
    },
    scrollContainer: {
        flex: 1,
        width: '90%'
    },
    itemsContainer: {
        flex: 1,
        marginTop: 10,
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
});

