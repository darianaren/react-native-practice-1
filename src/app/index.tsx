import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>
      <Button
        text="+1"
        onPress={() => setCount((prev) => (prev += 1))}
        onLongPress={() => setCount((prev) => (prev += 10))}
      />
      <Button
        text="-1"
        onPress={() => setCount((prev) => (prev -= 1))}
        onLongPress={() => setCount((prev) => (prev -= 10))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge: {
    fontSize: 120,
    fontWeight: 500,
  },
});
