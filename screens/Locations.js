import { useNavigation } from '@react-navigation/native'
import React,{useContext, useState,useEffect} from 'react'
import { View, Text, ScrollView, TouchableOpacity, Platform, PermissionsAndroid } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import MyContext from '../contexts/taskContext'
import LocationComponent from './components/LocationComponent'
import Geocoder from 'react-native-geocoding';
import * as Location from 'expo-location';

const Locations = () => {
  const [location, setLocation] = useState(null);

    
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
    
      const getOneTimeLocation = () => {
        Geocoder.from(location.coords.latitude, location.coords.longitude)
		.then(json => {
      var addressComponent = json.results[0].formatted_address;
      let copyLocation=[...locations].map((co)=>({...co,checked:false})).slice(0,3)
      copyLocation.unshift(  {
        address: addressComponent,
        lat: location.coords.latitude,
        lang: location.coords.longitude,
        checked: true,
      })
      setLocations(copyLocation)
		})
		.catch(error => console.warn(error));

      };
    const {locations,setLocations}=useContext(MyContext)

    const toggleCheck=()=>{
    let copyLocation=[...locations]
    let ind= copyLocation.findIndex((loc)=>loc.checked)
    console.log(ind);
    if(ind!==-1){
        copyLocation[ind].checked=false
    }
    setLocations(copyLocation)
    }

    const addCheckIn=()=>{
        Geocoder.init("AIzaSyAN7IuSYIiXpag8CHZbE6n7sVKjVjPy0NM");
        getOneTimeLocation()
    }

    return (
        <View style={{flex:1,justifyContent:'flex-start',padding:8,backgroundColor:'#ffffff'}}>
        <TouchableOpacity onPress={()=>addCheckIn()}><Text>+ CheckIn</Text></TouchableOpacity>
        <ScrollView contentContainerStyle={{flex:1}} style={{flex:1}}>
        <Text style={{fontWeight:'600',fontSize:18,margin:2}}>CheckedIn Location</Text>
        {
          locations.length && locations.map((task)=>{
              return  task.checked?<LocationComponent {...task} key={JSON.stringify(task)} onChecked={toggleCheck}/>:null
          })
        }
        <Text style={{fontWeight:'600',fontSize:18,margin:2}}>Recent Location</Text>
        {
          locations.length && locations.map((task)=>{
              return  !task.checked?<LocationComponent {...task} key={JSON.stringify(task)}/>:null
          })
        }
        </ScrollView>
    </View>
    )
}

export default Locations
