import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import  { HomeScreen } from './HomeScreen'
import Icon from 'react-native-vector-icons/Feather';

export class Top extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={styles.text}>f l o r i s t</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between',padding:20}}>
                    <Text style={{fontSize:25}}>Welcome!</Text>
                    <Text style={{fontSize:20}}><Icon name="user"  size={30}  /></Text>
                </View>
                <View style={{flex:1}}>
                    <HomeScreen />
                </View>

            </View>
        )
    }
}

export default Top


const styles= StyleSheet.create({
    text:{
        color:'#000',
        fontSize:25,
        fontFamily:'Serif',
        textAlign:'center',
        margin:12,
    }
})