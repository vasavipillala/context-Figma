import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { Component } from 'react'
//import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/AntDesign';

interface IState {
  data: any,
  inputValue: any,
  isFocus: boolean,
  inpt: string,
  open: boolean,

}
interface IProps {
  navigation: any

}

const data1 = [
  { label: 'price L-H', value: 'priceLower' },
  { label: 'price H-L', value: 'priceUpper' },
  { label: 'Title A-D', value: 'ascTitle' },
  { label: 'Title D-A', value: 'Dsc' },
  { label: 'category', value: 'category' },
  { label: 'catgory A-D', value: 'categoryAsc' },

];


export class Home extends Component<IProps, IState> {
  state = {
    data: [],
    inputValue: '',
    isFocus: false,
    inpt: '',
    open: false,
  }


  componentDidMount = () => {
    fetch('https://dummyjson.com/products').then(
      response => response.json()
    ).then(json => {
      this.setState({ data: json.products })
    })
  }



  displayProducts = () => {
    const filterList = this.state.data.filter((each: any) => {
      if (
        each.title.toLowerCase().includes(this.state.inputValue.toLowerCase())

      ) {
        return each;
      }

    });
    if (filterList) {
      return filterList
    } else {
      return [];
    }
  }
  onClick = () => {
    this.setState({ open: true })

  }


  render() {
    const { data, isFocus, inpt, inputValue, open } = this.state
    const displayProducts = this.displayProducts()

    let res = null;




    switch (this.state.inpt) {
      case 'priceLower':
        res = displayProducts.sort((a: any, b: any) => {

          if (a.price < b.price) {
            return -1;
          } else if (a.price > b.price) {
            return 1;

          } else {
            return 0;
          }
        });
        break;
      case 'priceUpper':
        res = displayProducts.sort((a: any, b: any) => {

          if (a.price > b.price) {
            return -1;
          } else if (a.price < b.price) {
            return 1;

          } else {
            return 0;
          }
        });
        break;
      case 'ascTitle':
        res = displayProducts.sort((a: any, b: any) => {

          if (a.title.toUpperCase() < b.title.toUpperCase()) {
            return -1;
          } else if (a.title.toUpperCase() > b.title.toUpperCase()) {
            return 1;

          } else {
            return 0;
          }
        });
        break;
      case 'Dsc':
        res = displayProducts.sort((a: any, b: any) => {

          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return -1;
          } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return 1;

          } else {
            return 0;
          }
        });
        break;
      case 'Category':
        res = displayProducts.sort((a: any, b: any) => {

          if (a.category.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          } else if (a.category.toLowerCase() > b.category.toLowerCase()) {
            return 1;

          } else {
            return 0;
          }
        });
        break;
      case 'categoryAsc':
        res = displayProducts.sort((a: any, b: any) => {

          if (a.category.toUpperCase() < b.title.toUpperCase()) {
            return -1;
          } else if (a.category.toUpperCase() > b.category.toUpperCase()) {
            return 1;

          } else {
            return 0;
          }
        });
    }





    return (
      <View style={styles.bgcontainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20, marginTop: 3 }}><Icon1 name="arrowleft" color='black' size={30} /></Text>
            <Text style={{ fontSize: 26, marginLeft: 1, color: '#000' }}> Bridal Bouquet</Text>
          </View>


          {open ? (<TextInput
            style={styles.input}
            onChangeText={(value) => this.setState({ inputValue: value })}
            value={inputValue}
          />) : (<TouchableOpacity onPress={this.onClick} style={{}}><Icon name="search" color='#000' size={30} /></TouchableOpacity>)}
          {/* <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={styles.input}
              onChangeText={(value) => this.setState({ inputValue: value })}
              value={inputValue}
            />

            <TouchableOpacity  onPress={this.onClick}   style={{}}><Icon name="search" color='#000' size={30} /></TouchableOpacity>

          </View> */}




        </View>
        <View>
          {/* <Text style={{ fontSize: 30, marginTop: 8, color: 'blue', marginLeft: 20, margin: 6 }}>All Products</Text> */}

          {/* <View>
          <TextInput
            style={styles.input}
            onChangeText={((value) => this.setState({ inputValue: value }))}
            placeholder="Search Here" />
        </View> */}

          {/* <View style={styles.container1}>
            <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data1}
                            //   search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            //   placeholder={!isFocus ? 'Select item' : '...'}
                            //   searchPlaceholder="Search..."
                            onChange={(item) => {
                                this.setState({ inpt: item.value });
                            }} />
                             </View> */}
        </View>


        <Text style={{ fontSize: 21, marginLeft: 20, color: '#000' }}>Catalog</Text>

        <View>
          <FlatList
            numColumns={2}
            data={displayProducts}
            renderItem={
              ({ item }: {
                item: any

              }) => {
                const name = item.title.length > 0
                  ? `${item.title.slice(0, 8)}..` : item.title

                return (
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Product', {
                    ...item,
                  })}>

                    <View style={styles.card}>

                      <View style={{ width: 120,height:120 }}>
                        <Image style={styles.tinyLogo}
                          source={{ uri: `${item.images[0]}` }}
                        />
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '60%', marginTop: 8, marginLeft: 10 }}>
                          <Text style={{ color: 'black', fontWeight: '100', fontSize: 18, fontFamily: "Roboto" }}>{name}</Text>
                         
                          <Text style={{ fontSize: 14, color: 'green', fontWeight: '500', fontFamily: 'math' }}>${item.price}</Text>
                                                  </View>
                        <View>
                          <Text style={{ fontSize: 20, marginTop: 20 }}><Icon name="shopping-cart" color='blue' size={20} /></Text>
                        </View>
                      </View>

                    </View>
                  </TouchableOpacity>
                )
              }
            }
            keyExtractor={item => item.id}

          />
        </View>




      </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    backgroundColor: '#ffffff',
    height: 200,
    width: 150,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  bgcontainer: {
    padding: 10,

  },
  data: {
    margin: 20

  },
  tinyLogo: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 66,
    height: 58,
  },
  input: {
    height: 40,
    width: 100,
    margin: 1,
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    borderRadius: 10,
  },


  container1: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
