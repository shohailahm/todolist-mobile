import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './routes';
import { MyContextProvider } from './contexts/taskContext';
const TestFairy = require('react-native-testfairy');
export default function App() {
  useEffect(() => {
  
    
  }, [])
  const [tasks, settasks] = useState([
    { completed: true, title: "call ralph", deadline: "2021-12-06", id: 1 },
    { completed: true, title: "call ralph", deadline: "2021-12-06", id: 5 },
    { completed: true, title: "call ralph", deadline: "2021-12-06", id: 6 },
    {
      completed: false,
      title: "call ralph",
      deadline: "2021-12-06",
      id: 7,
    },
    { completed: true, title: "call zion", deadline: "2021-12-08", id: 2 },
    { completed: true, title: "call ralph", deadline: "2021-12-07", id: 3 },
    { completed: false, title: "call zion", deadline: "2021-12-07", id: 4 },
  ])

  const [locations,setLocations]=useState([
    {
      address: "Pustegrand , Stockholm , SE",
      lat: "59.239 'N",
      lang: "60.32 'E",
      checked: true,
    },
    {
      address: "Pustegrand,  Stockholm ,SE",
      lat: "59.239 'N",
      lang: "60.32 'E",
      checked: false,
    },
    { address: "Miami, Florida ,USA", lat: "89.239 'N", lang: "90.32 'E" },
  ],)

  
  return (
    <SafeAreaProvider>

    <NavigationContainer>
      <MyContextProvider value={{tasks,settasks:settasks,locations,setLocations}}>
      <MainNavigator/>
      </MyContextProvider>
    </NavigationContainer>

    </SafeAreaProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
