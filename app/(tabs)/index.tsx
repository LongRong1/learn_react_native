import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, Button, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function HomeScreen() {

 
  const [name,setName] = useState<string>("")
  const [arr,setArr] = useState([
    {id:1,name:"long",age:18},
    {id:2,name:"long1",age:19},
    {id:3,name:"long2",age:20},
    {id:4,name:"long3",age:21},
    {id:5,name:"long4",age:22},
  ])

  return (
    <View style={styles.reactText}>
      {arr.map((item) => (
        <View key={item.id} style={{ marginBottom: 10}}>
          <Text style={{color:"red",backgroundColor:"white"}}>Name: {item.name}</Text>
          <Text style={{color:"red"}}>Age: {item.age}</Text>
        </View>
      ))}
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
});
