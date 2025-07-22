import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, Button, TextInput, FlatList, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

interface itodo{
  id:number;
  name:string
}

const reandomIn = (min:number,max:number)=>{
  return Math.floor(Math.random()*(max - min))+min;
}

export default function HomeScreen() {

  const [todo, setTodo] = useState('')
  const [listtodo, setListTodo] = useState<itodo[]>([])

  const handleClick=()=>{
    if(!todo) {
      alert("emty")
      return;
    }
    else
      {setListTodo([...listtodo,{id:reandomIn(1,100),name:todo}]);
    setTodo('')}
  }

  const deleteTodo= (id:number)=>{
    const newto = listtodo.filter(item=>item.id !== id)
    setListTodo(newto)
  }

  return(
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()
    }}>
    <View style={styles.reactText}>
      
      <Text style={{paddingTop:200}}>Long Ne</Text>

      <View id='input'>
        <Text>Form</Text>
        <TextInput style={{color:"red",width:100,borderBottomColor:"black",borderBottomWidth:1,margin:10}}
          onChangeText={(value)=>setTodo(value)}
          value={todo}
        ></TextInput>
        <Button title='Add' 
        onPress={handleClick}
        ></Button>
      </View>

      <View id='list'>
        <Text>list</Text>
        <FlatList
          data={listtodo}
          keyExtractor={item => item.id+""}
          renderItem={({item}) =>{
            return(
              <Pressable onPress={()=>deleteTodo(item.id)}>
              <Text style={styles.todoItem} key={item.id}>{item.name}</Text>
              </Pressable>
            )

          }}
        ></FlatList>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({

  reactText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"white",
  },
  todoItem:{
    fontSize:30,
    borderWidth:1,
    borderStyle:"solid",
    marginBottom:10
  },
});
