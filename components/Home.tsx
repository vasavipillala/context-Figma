import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';


import Catalog from './Catalog';
import Chat from './Chat';
import Cart from './Cart';
import Top from './Top';
import Nested from './Nested';





const Tab = createBottomTabNavigator();


export class Home extends Component {
  render() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false,
        
       }}>
        <Tab.Screen

          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: {
              color: 'Black',
              fontSize: 14,
              fontWeight: 'bold'
            },
            tabBarIcon: ({focused}) => (
              <Icon name="home" color={focused? 'black' : 'grey'} size={35} />

            )
          }}

          name="Top" component={Top} />
        <Tab.Screen
          options={{
            tabBarLabel: 'Catalog',
            tabBarLabelStyle: {
              color: 'Black',
              fontSize: 14,
              fontWeight: 'bold'
            },
            tabBarIcon: ({focused}) => (
              <Icon1 name="book-open" 
              color={focused? 'black' : 'grey'} size={25}/>

            )
          }}

          name="Nested" component={Nested} />
        <Tab.Screen

          options={{
            tabBarLabel: 'Chat',
            tabBarLabelStyle: {
              color: 'Black',
              fontSize: 14,
              fontWeight: 'bold'
            },
            tabBarIcon: ({focused }) => (
              <Icon2 name="chat" color={focused? 'black' : 'grey'} size={30} />
            )
          }} name="Chat" component={Chat} />
        <Tab.Screen
          options={{
            tabBarLabel: 'Cart',
            tabBarLabelStyle: {
              color: 'Black',
              fontSize: 14,
              fontWeight: 'bold'
            },
            tabBarIcon: ({focused}) => (
              <Icon1 name="shopping-cart" color={focused? 'black' : 'grey'} size={25} />
            )
          }}
          name="Cart" component={Cart} />

      </Tab.Navigator>
    )
  }
}

export default Home