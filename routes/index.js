import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import AddTask from '../screens/AddTask';
import Locations from '../screens/Locations';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity,View,StyleSheet,Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Icon,Divider } from 'react-native-elements';
import { CommonActions,useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
export const TabBg = ({
    color = '#FFFFFF',
    ...props
  }) => {
    return (
      <Svg
        width={75}
        height={61}
        viewBox="0 0 75 61"
        {...props}
      >
        <Path
          d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
          fill={color}
        />
      </Svg>
    )
  };

export const TabBarAdvancedButton= ({
    bgColor,
    ...props
  }) => (
    <View
      style={styles.container}
      pointerEvents="box-none"
    >
    {/* <View style={styles.btn}> */}
    <TouchableOpacity
        style={styles.btn}
        onPress={props.onPress}
      >
        <Icon
          name="add"
          color="#ffffff"
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
    {/* </View> */}
    <Divider color="black" orientation="horizontal" width={25} />
    </View>
  );

const Tab = createBottomTabNavigator();
function MainNavigator(){
    const navigation = useNavigation();
    return (
    <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'list'

          } else if (route.name === 'Task') {
            iconName = 'add-circle';
          }

          else if (route.name === 'Locations') {
            iconName = 'pin';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Task" component={AddTask} options={{
            headerLeft:(props)=>(<TouchableOpacity onPress={()=>{
                navigation.goBack()}}><Text style={{marginLeft:4,fontSize:18,fontWeight:'500'}}>Back</Text></TouchableOpacity>),
    tabBarButton: (props) => (
      <TabBarAdvancedButton
        bgColor={'#ffffff'}
        {...props}
      />
    )
  }}/>
        <Tab.Screen name="Locations" component={Locations}/>
      </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
     position:'relative',
     justifyContent:'center',
     alignItems:'center',
     borderBottomColor:'#000000',
     borderBottomWidth:4
    },
    btn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:60,
        width:60,
        backgroundColor:"#000000",
        borderRadius:30,
        position:'absolute',
        bottom:10,
        left:30
    },
    navigatorContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      // SHADOW
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    navigator: {
      borderTopWidth: 0,
      backgroundColor: 'transparent',
      elevation: 30
    },
    xFillLine: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 34
    }
  });

export default MainNavigator