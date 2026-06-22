import { useState } from 'react';
import {  Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [conter, setConter] = useState(0);
  return (
  <View style={styles.container}>
    <Text style={styles.textHuge}>{conter}</Text>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
  },
  textHuge:{
    fontSize: 120,
    fontWeight: 500
  }
});
