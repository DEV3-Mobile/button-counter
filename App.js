import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    console.log("increase");
    // setCounter(counter + 1);
    // setCounter(counter + 1);//counter is laatst gerenderde versie van counter dus 0 en niet 1. wijziging op lijn10 werd nog niet gerenderd.
    setCounter((currentCounter) => currentCounter + 1);
    setCounter((currentCounter) => currentCounter + 1);//currentCounter is waarde die gereturnd werd door de functie die voorafgaat aan deze functie in de wachtrij. Dus wijziging op lijn12 werd wel al toegepast op currentCounter.
    console.log(counter);

  }

  const decrease = () => {
    console.log("decrease");
    // setCounter(counter - 1);
    // setCounter(counter - 1);//counter is laatst gerenderde versie van counter dus 0 en niet -1
    setCounter((currentCounter) => currentCounter - 1);
    setCounter((currentCounter) => currentCounter - 1);
    console.log(counter);

  }
  return (
    <View style={styles.container}>
      <Button style="button" title="increase" onPress={increase} />
      <Button style="button" title="decrease" onPress={decrease} />
      <Text style="text">you clicked {counter} times</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
