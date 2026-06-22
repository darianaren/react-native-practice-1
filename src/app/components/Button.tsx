import { Text, Pressable, StyleSheet } from 'react-native';

export default function Button({
  text,
  onPress,
  onLongPress,
}: {
  text: string;
  onPress: VoidFunction;
  onLongPress: VoidFunction;
}) {
  return (
    <Pressable
      style={styles.floattingButton}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={styles.floattingText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
