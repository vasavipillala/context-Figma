import { ScrollView, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import need from './Images/need.png'




interface IProps {
    navigation: any

}
interface IState {

}

export class Wedding extends Component<IProps, IState> {





    onPress = () => {
        this.props.navigation.navigate("Catalog")

    }
    render() {
        return (
            <View style={{ padding: 10 }}>
                <View>
                    <Image
                        style={styles.stretch}
                        source={need}
                    />
                </View>
                <ScrollView horizontal style={styles.scrollView}>


                    <TouchableOpacity style={{}} onPress={this.onPress}>
                        <View style={styles.images}>
                            <Image
                                style={styles.images1}
                                source={require('./Images/all.png')}
                            />
                            <Text style={{ textAlign: 'center' }}>All</Text>

                        </View>

                    </TouchableOpacity>

                    <View style={styles.images}>
                        <Image
                            style={styles.images1}
                            source={require('./Images/bouq.png')}
                        />
                        <Text style={{ textAlign: 'center' }}>Bouqite</Text>

                    </View>
                    <View style={styles.images}>
                        <Image
                            style={styles.images1}
                            source={require('./Images/table.png')}
                        />
                        <Text style={{ textAlign: 'center' }}>Table</Text>

                    </View>
                    <View style={styles.images}>
                        <Image
                            style={styles.images1}
                            source={require('./Images/aise.png')}
                        />
                        <Text style={{ textAlign: 'center' }}>Aisle</Text>

                    </View>
                    <View style={styles.images}>
                        <Image
                            style={styles.images1}
                            source={require('./Images/access.png')}
                        />
                        <Text style={{ textAlign: 'center' }}>Accessories</Text>

                    </View>
                </ScrollView>
                <Text style={{ fontSize: 20, margin: 10, color: '#000' }}>Popularity</Text>
                <View>

                    <ScrollView horizontal style={styles.scrollView}>
                        <View style={styles.card}>
                            <View>
                                <Image
                                    style={styles.pic}
                                    source={require('./Images/pic.png')}
                                />
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between', marginTop: 10
                            }}>
                                <Text style={{ fontSize: 20, color: '#9682B6' }}>Spark</Text>
                                <Image
                                    style={styles.images1}
                                    source={require('./Images/stars.png')}
                                />

                            </View>
                            <Text style={{ fontSize: 15 }}>$90</Text>
                        </View>
                        <View style={styles.card}>
                            <View>
                                <Image
                                    style={styles.pic}
                                    source={require('./Images/pic1.png')}
                                />
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between', marginTop: 10
                            }}>
                                <Text style={{ fontSize: 20, color: '#9682B6' }}>Spark</Text>
                                <Image
                                    style={styles.images1}
                                    source={require('./Images/stars.png')}
                                />

                            </View>
                            <Text style={{ fontSize: 15 }}>$90</Text>
                        </View>
                        <View style={styles.card}>
                            <View>
                                <Image
                                    style={styles.pic}
                                    source={require('./Images/pic2.png')}
                                />
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between', marginTop: 10
                            }}>
                                <Text style={{ fontSize: 20, color: '#9682B6' }}>Spark</Text>
                                <Image
                                    style={styles.images1}
                                    source={require('./Images/stars.png')}
                                />

                            </View>
                            <Text style={{ fontSize: 15 }}>$90</Text>
                        </View>
                    </ScrollView>
                </View>

            </View>
        )
    }
}

export default Wedding



const styles = StyleSheet.create({
    stretch: {
        height: 100, resizeMode: 'stretch',
        alignItems: 'center',
        padding: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5
    },
    images: {
        margin: 10,
        textAlign: 'center'

    },
    images1: {
        margin: 1

    },
    card: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        width: 260,
        height: 200,
        marginRight: 10,
    },
    pic: {
        width: 250,
        height: 120
    },
    scrollView: {
        marginHorizontal: 10,
        marginTop: 5

    },
});