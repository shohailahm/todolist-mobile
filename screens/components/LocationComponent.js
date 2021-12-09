import React from 'react'
import { View,StyleSheet, Text } from 'react-native'
import { CheckBox, Icon,ListItem,Button } from 'react-native-elements'

function LocationComponent({onChecked,address,lat,lang}) {
    return (
        <ListItem.Swipeable
            leftContent={<Button
                title="Info"
                icon={{ name: 'info', color: 'white' }}
                buttonStyle={{ minHeight: '50%' }} />}
            rightContent={<Button
                title="Delete"
                onPress={onChecked}
                icon={{ name: 'delete', color: 'white' }}
                buttonStyle={{ minHeight: '50%', backgroundColor: 'red' }} />}
        >
             
               
             { <Icon name="room" color="orange" />}
            <ListItem.Content style={{flex:1}}>
            
            <ListItem.Title>{address}</ListItem.Title>
                        <ListItem.Subtitle>{lat+''+lang}</ListItem.Subtitle>
                 

        </ListItem.Content>
</ListItem.Swipeable>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        flexDirection:'column',
        backgroundColor:'#ffffff',
        width:'100%'
    }
})

export default LocationComponent
