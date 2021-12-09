import React,{useContext, useState} from 'react'
import { View, Text } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';


import { Input,Icon, Button } from 'react-native-elements';
import MyContext from '../contexts/taskContext';
const AddTask = () => {
    const [title,setTitle]=useState('')
    const [date, setDate] = useState(new Date())
    const {tasks,settasks}=useContext(MyContext)
    const save=()=>{
        if(!title || !date){
            return
        }
        let copiedTasks=[...tasks];
        copiedTasks.push({
            title: title,
            deadline: date.toDateString(),
            id: Math.random(),
            completed: false,
        })
        setTitle('')
        settasks(copiedTasks)

    }
    return (
        <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',marginLeft:8}}>
        
<Input
  placeholder='Summary'
  value={title}
  onChangeText={(e)=>{setTitle(e)}}
  leftIcon={
    <Icon
      name='chat'
      size={24}
      color='black'
    />
  }
  multiline={true}
  numberOfLines={4}
  style={{height:100}}
/>

<View style={{flex:1}}>
<Text>Due Date : </Text>
<DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={setDate}
        />
</View>
<View style={{flex:1,width:'100%',padding:16}}>
<Button title="save"  buttonStyle={{ alignSelf: 'stretch' }} onPress={save}/>
</View>
     
        </View>
    )
}

export default AddTask
