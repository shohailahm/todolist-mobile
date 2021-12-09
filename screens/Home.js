import { useNavigation } from '@react-navigation/native'
import React,{useContext, useState} from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import MyContext from '../contexts/taskContext'
import TaskComponent from './components/TaskComponent'

 
export default function Home() {
    const navigation=useNavigation()
    const {tasks,settasks}= useContext(MyContext)
 

      const toggleCheck=(id)=>{
          let copiedTasks=[...tasks];
        let ind = copiedTasks.findIndex((item) => item.id == id);
        copiedTasks[ind].completed = true;
        settasks(copiedTasks)
      }
    return (
        <View style={{flex:1,justifyContent:'flex-start',padding:8,backgroundColor:'#ffffff'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Task')}><Text>+ Add New Task</Text></TouchableOpacity>
            <ScrollView contentContainerStyle={{flex:1}} style={{flex:1}}>
            <Text style={{fontWeight:'600',fontSize:18,margin:2}}>InComplete</Text>
            {
              tasks.length && tasks.map((task)=>{
                  return  !task.completed?<TaskComponent {...task} key={task.id} onChecked={toggleCheck}/>:null
              })
            }
            <Text style={{fontWeight:'600',fontSize:18,margin:2}}>Completed</Text>
            {
              tasks.length && tasks.map((task)=>{
                  return  task.completed?<TaskComponent {...task} key={task.id}/>:null
              })
            }
            </ScrollView>
        </View>
    )
}
