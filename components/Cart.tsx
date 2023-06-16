

import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import React, { Component } from 'react'
import ContextProvider from '../contextApi/ContextProvider';




interface IState {
    count2: number,
    // money1: number

}
interface IProps {
    props: any,
    route: any,
    item: any,
    navigation: any,
    tasks: any

}

export class Cart extends Component<IProps, IState> {
    state = {
        count2: 1,

    }

    static contextType = ContextProvider;




    render() {
        console.log(this.context.tasks)
        const { count2 } = this.state
        let money1 = 0

        for (let i = 0; i < this.context.tasks.length; i++) {
            money1 += this.context.tasks[i].price * this.context.tasks[i].quntity
            console.log(money1)

        }

        return (
            <View>
                {this.context.tasks.length !== 0 ? <View>

                    <FlatList horizontal='1'
                        data={this.context.tasks}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            console.log("render Item", item)
                            return (
                                <View style={{}}>

                                    <View style={{ flexDirection: 'row', padding: 0 }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 2, width: '50%', height: 170, padding: 20}}>

                                            <Image style={styles.tinyLogo}
                                                source={{ uri: item.images[0] }}
                                            />
                                        </View>
                                        <View style={{ marginTop: 25, margin: 4, width: '50%', padding: 1 }}>
                                            <Text style={{ color: '#000', fontSize: 20 }}>{item.title}</Text>
                                            <Text>{item.brand}</Text>
                                            <Text style={{ color: 'green', fontSize: 18 }}>${item.price * item.quntity}</Text>
                                            <View>
                                                <Text style={{fontSize:20}}>Qty:{item.quntity}</Text>
                                                <TouchableOpacity style={styles.button1} onPress={() => {
                                                    this.context.deleteTask({
                                                        ...item,

                                                    });
                                                }}>
                                                    <Text>Remove</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>



                                </View>

                            )
                        }}
                    />

                    <View style={styles.button}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 20 }}>Total Amount:</Text>
                            <Text style={{ fontSize: 24, color: 'green' }}>${money1}</Text>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ height: 45, width: 130, backgroundColor: '#ff9900', padding: 10, borderRadius: 70, }}>
                                <Text style={{ color: '#000', fontSize: 20 }}> View Details</Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 45, width: 130, backgroundColor: '#ff9900', padding: 10, borderRadius: 18, marginLeft: 80 }}>
                                <Text style={{ color: '#000', fontSize: 20 }}> Continue</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                    : <View>
                        <Text style={{fontSize:30,textAlign:'center',marginTop:20}}>Empty Cart</Text>
                        <Image
                            style={styles.image}
                            source={require('./Images/empty.jpg')}
                        />
                    </View>}





            </View>
        )
    }
}

export default Cart



const styles = StyleSheet.create({
    brand: {
        color: '#000',
        fontSize: 20,
        fontFamily: 'Serif',
        textAlign: 'center',
        margin: 12,
    },
    tinyLogo: {
        width: '100%',
        height: '100%',
        // alignItems: 'center',
        // borderRadius: 0,
        // margin: 3,
    },
    simb: {
        fontSize: 20,
        margin: 1
    },
    simb1: {
        fontSize: 20,
        margin: 1, backgroundColor: '#fff',
        width: 28,
        marginLeft: 3,
        textAlign: 'center'
    },
    button: {

        alignItems: 'center',
        top: 565,
        position: 'absolute',
        padding: 10


    },
    button1: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 35,
        width: 120,
        backgroundColor: '#9682B6',
        borderRadius: 10,
        padding: 8
    },
    image:{
        justifyContent:'center',
        height:'80%',
        width:'100%'
    }
})