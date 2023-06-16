import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Chat extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#9682B6'}}>
                <Text style={{textAlign:'center', fontSize:20}}>Chat</Text>
            </View>
        )
    }
}

export default Chat