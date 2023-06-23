import React from 'react';
import {StatusBar} from 'react-native';
import Routes from "./src/routes";

import { NavigationContainer } from '@react-navigation/native';

export default function App() { 
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#38A69D" barStyle="light-content"  />
      <Routes/>
    </NavigationContainer>
  );
}


/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
  },
});
*/