import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Pressable, Modal, Alert, FlatList, Dimensions } from 'react-native'
import React, { Component, createRef } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './Home';

import { SliderBox } from "react-native-image-slider-box";
import ContextProvider from '../contextApi/ContextProvider';



interface IState {
    modalVisible: boolean,
    count1: number

}
interface IProps {
    props: any,
    route: any,
    item: any,
    navigation: any

}
let CurrentSlide = 0;
let IntervalTime = 4000;

export class Product extends Component<IProps, IState> {
    state = {
        modalVisible: false,
        count: 1,
    }
    flatList = createRef();

    onPressIncriment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    DecrementButton = () => {
        if (this.state.count1 > 1) {
            this.setState({ count: this.state.count - 1 })
        }
    }



    static contextType = ContextProvider;

    onPress = () => {

    }
    render() {
        const { modalVisible } = this.state
        // console.log(this.props)
        const itemm = this.props.route.params
        const images = itemm.images
        const item = { ...itemm, count: 0 }
        const { addNewTask, tasks } = this.context
        console.log(tasks, "task")
        // console.log(addNewTask, "added")

        // console.log(item)
        const image = item[0]
        return (
            <View style={styles.bgcontainer}>

                <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 2 }}>
                            <View style={{ marginTop: 10, marginBottom: 10 }}>

                            </View>



                            <SliderBox
                                images={images}
                                sliderBoxHeight={390}

                                dotColor="#FFEE58"
                                inactiveDotColor="#90A4AE"
                            />



                            {/* 
                            <Image style={styles.tinyLogo}
                                source={{ uri: `${item.images[0]}` }}
                            /> */}
                        </View>
                        <View style={{ padding: 10, backgroundColor: '#fff' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={styles.brand}>Spark</Text>
                                    <Text style={{ fontSize: 18, marginLeft: 20, color: 'green' }}>Availabilty</Text>
                                    <Text style={{ fontSize: 18, marginLeft: 20, color: '#000' }}>Rating</Text>

                                </View>
                                <View>
                                    <Text style={styles.brand}>{item.brand}</Text>
                                    <Text style={{ fontSize: 18, marginLeft: 20, color: 'green' }}>In Stock</Text>
                                    <Image
                                        style={{}}
                                        source={require('./Images/stars.png')}
                                    />
                                </View>

                            </View>
                            <View style={{ backgroundColor: 'grey', height: 1, width: '100%', marginTop: 20 }} />


                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                                <Text style={{ fontSize: 25, color: '#000' }}>Quantity</Text>
                                {/* <Image
                                    style={{}}
                                    source={require('./Images/Counter.png')}
                                /> */}
                                <View style={{ borderWidth: 0, height: 29, borderRadius: 10, padding: 1, width: 120, backgroundColor: '#b3cccc' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <TouchableOpacity onPress={() => {

                                            this.DecrementButton()
                                            this.context.onDecrease(item)
                                        }}>
                                            <Text>--</Text>
                                        </TouchableOpacity >
                                        <Text style={{}}>{this.state.count}</Text>
                                        <TouchableOpacity onPress={() => {
                                            this.onPressIncriment()
                                            this.context.increment(item)
                                        }}>
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                                <Text style={{ fontSize: 25, color: '#000' }}>Total</Text>
                                <Text style={{ fontSize: 28, color: '#9682B6' }}>${item.price * this.state.count}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity style={styles.button} onPress={() => {
                                    Alert.alert('Item Is Added to The Cart')
                                    // addNewTask(item)
                                    this.context.addNewTask({
                                        ...item,
                                        quntity: 1
                                    });
                                    // this.props.navigation.navigate('Cart')
                                }
                                }>
                                    <Text style={{ fontSize: 20, }}><Icon name="shopping-cart" color='black' size={20} /></Text>

                                    <Text>Add to cart</Text>
                                </TouchableOpacity>
                            </View>
                        </View>



                        <View>
                            {/* <View >
              <Text style={styles.brand2}>Stock:{item.stock}</Text>
              <Text style={styles.brand3}>Rating:{item.rating}</Text>
              <Text style={styles.brand4}>Discount:{item.discountPercentage}</Text>
            </View> */}
                            {/* <Text style={styles.brand}>{item.brand}</Text>
              <Text style={{ fontSize: 18,marginLeft:20 }}>{item.stock}</Text> 
              <Text style={{ fontSize: 18,marginLeft:20 }}>{item.rating}</Text> */}

                            {/* <View style={{ padding: 4 }}> 
             

             
              <View style={{padding:3,marginLeft:20}}>
                <Text>PRICE</Text>
              <Text style={{ fontSize: 35, color: 'green', fontWeight: '500', fontFamily: 'math', }}>${item.price}</Text> 
             
              </View>
              <View style={{ backgroundColor: 'grey', height: 2, width: '100%', marginTop: 20 }} />

              <View style={{marginLeft:20}}>
                <Text style={{ color: '#00cc99', fontSize: 20, marginBottom: 10 }}>View More...</Text>
                <Text style={{ color: 'black', fontSize: 18, fontFamily: 'fangsong' }}>RAM:4GB RAM</Text>
                <Text style={{ color: 'black', fontSize: 18, fontFamily: 'fangsong' }}>Rear Camera: 64MP+8MP+2MP+2MP</Text>
                <Text style={{ color: 'black', fontSize: 18, fontFamily: 'Roboto' }}>Front Camera:16MP</Text>
                <Text style={{ color: 'black', fontSize: 18, fontFamily: 'Roboto' }}>Display:6.4 inch Full HD+</Text>
                <Text style={{ color: 'black', fontSize: 18, fontFamily: 'Roboto' }}>Battery:5000mAh</Text>
                <Text style={{ color: 'black', fontSize: 18, fontFamily: 'Roboto' }}>ROM:128GB ROM</Text>
              </View>
            </View> */}
                        </View>

                    </View>
                </ScrollView>
                {/* <View>
                    <Home />
                </View> */}
            </View>




        )
    }
}

export default Product

const styles = StyleSheet.create({
    bgcontainer: {
        flexDirection: 'column',
        paddingTop: 3,
        // padding:20




    },
    brand: {
        color: '#00e6e6',
        fontFamily: 'Roboto',
        fontSize: 25,
        marginTop: 0,
        marginLeft: 20

    },
    brand2: {
        color: 'black',
        fontFamily: 'Roboto',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 20

    },
    brand3: {
        color: 'black',
        fontFamily: 'Roboto',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 20

    },
    brand4: {
        color: 'black',
        fontFamily: 'Roboto',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 20

    },
    smini: {

        borderRadius: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    mini: {
        height: 70,
        width: '90%',
        borderWidth: 1,
        color: '#1a8cff',
        borderRadius: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'


    },
    minihead: {
        fontSize: 20,

    },
    scrollView: {

        marginHorizontal: 4,
    },
    container: {
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',


    },
    tinyLogo: {
        width: '100%',
        height: 384,
        alignItems: 'center',
        borderRadius: 0,
        margin: 3,
    },
    gbcon: {
        flexDirection: 'row',
        justifyContent: 'center'

    },
    gb: {
        height: 80,
        width: '45%',
        borderWidth: 1,
        color: '#1a8cff',
        borderRadius: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3

    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 40,
        width: 120,
        backgroundColor: '#9682B6',
        borderRadius: 10,
        padding: 10
    },
    sliderItems: {
        marginLeft: 5,
        marginRight: 5,
        height: 200,
        width: Dimensions.get('window').width,
    },





})

