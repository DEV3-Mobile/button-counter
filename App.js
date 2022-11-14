import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Button style="button" title="increase" onPress={() => console.log("increase")} />
      <Button style="button" title="decrease" onPress={() => console.log("decrease")} />
      <Text style="text">you clicked 0 times</Text>
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
