//
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppList from './AppList';
import AppForm from './AppForm';

const { Navigator, Screen } = createBottomTabNavigator();

function AppTab() {
    return (
        <NavigationContainer>
            <Navigator
                //Estilo das Abas
                screenOptions={{
                    tabBarActiveTintColor: "#32264d", //Cor da fonte
                    tabBarInactiveTintColor: "#c1bccc", //Cor de fundo qdo a aba não-selecionada
                    tabBarActiveBackgroundColor: "#ebebf5", //Cor da Aba qdo selecionada
                    tabBarInactiveBackgroundColor: "#fafafc", //Cor de fundo aba não-selecionada
                    tabBarLabelStyle: { //Posicionamento e tamanho
                        fontSize: 13,
                        position: 'absolute',
                        top: 15,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    tabBarInconStyle: { display: "name" }
                }}
            >
                <Screen name="AppList" component={AppList}
                    options={{
                        tabBarLabel: 'Compras'
                    }}
                />
                <Screen name="AppForm" component={AppForm}
                    options={{
                        tabBarLabel: 'Compras'
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppTab;