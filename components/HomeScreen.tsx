import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Wedding from './Wedding';
import Decor from './Decor';
import Gift from './Gift';
import Top from './Top';




const Tab = createMaterialTopTabNavigator();


export class HomeScreen extends Component {
  render() {
    return (
      <Tab.Navigator screenOptions={{
        swipeEnabled: false,
        tabBarIndicatorStyle: {

          backgroundColor: '#9682B6',
          height: 100,
          borderRadius: 10,
          borderTopLeftRadius  :10,
          borderTopRightRadius:10,
        }

      }}>
        <Tab.Screen
          name="Wedding"
          component={Wedding}
          options={{
            tabBarLabel: 'Wedding',

          }}


        />

        <Tab.Screen
          name="Decor"
          component={Decor}
          options={{ tabBarLabel: 'Decor' }}
        />
        <Tab.Screen
          name="Gift"
          component={Gift}
          options={{ tabBarLabel: 'Gift' }}
        />


      </Tab.Navigator>
    )
  }
}

export default HomeScreen