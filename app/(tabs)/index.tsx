import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, Button, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function HomeScreen() {

  const [count,useCount]= useState<number>(0)
  const [name,setName] = useState<string>("")

  return (
    <View style={styles.reactText}>
      <Button title='increase' onPress={()=>{useCount(count+1)}}>
      </Button>
      <Text style={{color:'red'}}>count : {count}</Text>
      <View style={{flexDirection:"row"}}>
        <Text style={{color:"white"}}>Your name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName}></TextInput>
      
      </View>
      <Button title='submit' onPress={()=> setName(name)}>
      </Button>
      <Text style={{color:"white"}}>Hello {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: '#888',
    width:100,
    color:'white',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
