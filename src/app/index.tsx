import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>
      <Pressable
        style={styles.floattingButton}
        onPress={() => setCount((prev) => (prev += 1))}
        onLongPress={() => setCount((prev) => (prev += 10))}
      >
        <Text style={styles.floattingText}>+1</Text>
      </Pressable>
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
  floattingButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#3984b9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
  },
  floattingText: {
    fontSize: 20,
    color: '#fff',
  },
});
