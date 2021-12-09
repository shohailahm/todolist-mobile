import React from 'react'
import { View,StyleSheet, Text } from 'react-native'
import { CheckBox, Icon,ListItem,Button } from 'react-native-elements'

function TaskComponent({completed,title,id,deadline,onChecked}) {
    return (
        <ListItem.Swipeable
            leftContent={<Button
                title="Info"
                icon={{ name: 'info', color: 'white' }}
                buttonStyle={{ minHeight: '50%' }} />}
            rightContent={<Button
                title="Delete"
                icon={{ name: 'delete', color: 'white' }}
                buttonStyle={{ minHeight: '50%', backgroundColor: 'red' }} />}
        >
             
               <ListItem.CheckBox
                           
                            disabled={completed}
                            title={title}
                            checked={completed}
                            onPress={() => onChecked(id)} />
          
          
            <ListItem.Content style={{flex:1}}>
            {!completed && <Icon name="notifications" color="orange" />}
                        <Text>{deadline}</Text>
                 

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

export default TaskComponent
