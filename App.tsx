import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Chat from './components/Chat';
import Cart from './components/Cart';
import Product from './components/Product';
import ContextProvider from './contextApi/ContextProvider';
import Nested from './components/Nested';


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

const Stack = createNativeStackNavigator();


export class App extends Component {
  state = {
    tasks: [],
    count1: 1,
  }


  addNewTask = (task: any) => {

    const { tasks } = this.state

    const productObject = tasks.find((each) => each.id == task.id)


    if (productObject) {
      this.setState((prev) => ({
        tasks: prev.tasks.map((eachItem: any) => {
          if (productObject.id === eachItem.id) {
            this.setState({ count1: this.state.count1 + 1 });

            return { ...eachItem, quntity: eachItem.quntity + 1 }
          }
          return eachItem
        })
      }))
    } else {
      const updatedTask = [...tasks, task]
      this.setState({ tasks: updatedTask })
    }


  };



  onDecrease = (task: any) => {

    const { tasks } = this.state

    const productObject = this.state.tasks.find((each) => each.id == task.id)
    console.log('glbs', (productObject))

    if (productObject) {
      this.setState((prev: any) => ({
        tasks: prev.tasks.map((eachItem: any) => {
          if (productObject.id === eachItem.id) {
            console.log('del')
            return { ...eachItem, quntity: eachItem.quntity - 1 }
          }
          return eachItem
        })
      }))
    }




  };



  deleteTask = (taskId: any) => {
    this.setState(this.state.tasks.splice(taskId, 1));
  }
  increment = (task: any) => {
    const { tasks } = this.state

    const productObject = this.state.tasks.find((each) => each.id == task.id)
    console.log('glbs', (productObject))

    if (productObject) {
      this.setState((prev: any) => ({
        tasks: prev.tasks.map((eachItem: any) => {
          if (task.id === eachItem.id) {
            console.log('del')
            return { ...eachItem, quntity: eachItem.quntity + 1 }
          }
          return eachItem
        })
      }))
    }


  }
  render() {
    console.log(this.state.tasks, "updated");
    return (
      <ContextProvider.Provider
        value={{
          count1: this.state.count1,
          tasks: this.state.tasks,
          addNewTask: this.addNewTask,
          increment: this.increment,
          deleteTask: this.deleteTask,
          onDecrease: this.onDecrease,
        }}
      >
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Catalog" component={Catalog} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Nested" component={Nested} />

          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider.Provider>
    )
  }
}

export default App