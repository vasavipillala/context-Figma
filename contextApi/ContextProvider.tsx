import React from 'react';
import { Text, View } from 'react-native'



export default React.createContext({
    tasks: [],
    count1: 1,
    addNewTask: (task: any) => { },
    deleteTask: (taskId: number) => { },
    increment: (counter: number) => { },
    onDecrease: (task: number) => { }


});