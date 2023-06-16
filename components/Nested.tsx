import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Catalog from './Catalog'
import Product from './Product';





const Stack = createNativeStackNavigator();

export class Nested extends Component {
    render() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Catalog" component={Catalog} />
                <Stack.Screen name="Product" component={Product} />

            </Stack.Navigator>
        )
    }
}

export default Nested