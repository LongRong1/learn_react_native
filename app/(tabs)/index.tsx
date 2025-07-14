import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function HomeScreen() {

  const [count,useCount]= useState<number>(0)

  return (
    <View style={styles.reactText}>
      <Button title='increase' onPress={()=>{useCount(count+1)}}>
      </Button>
      <Text style={{color:'red'}}>count : {count}</Text>
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
