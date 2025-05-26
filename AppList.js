import {StatusBar} from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import AppItem from './AppItem'

export default function AppList(){
    //Entre o function e o return, adicionar os componentes que precisar
    const [items, setItems] = useState([
        {id: 1, quantidade: 5, descricao: 'arroz'},
        {id: 2, quantidade: 1, descricao: 'feijão'},
        {id: 3, quantidade: 0.5, descricao: 'lentilha'},
        {id: 4, quantidade: 1, descricao: 'massa'},
        {id: 5, quantidade: 1, descricao: 'katchup'},
        {id: 6, quantidade: 1, descricao: 'queijo-ralado'}
    ]);
    return (
        <View style={StyleSheet.conainer}>
        <StatusBar style="light"/>
        <Text style={styles.title}>Lista de Compras</Text>
        <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.itemsContainer}>
            {items.map(item => {
                return <AppItem key={items.id} id={items.id} item={item.quantidade + ' de ' + item.descricao} />
            }) }
        </ScrollView>
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

