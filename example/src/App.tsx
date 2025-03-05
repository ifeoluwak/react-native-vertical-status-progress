// import { multiply } from 'react-native-vertical-status-progress';
import { Text, View, StyleSheet } from 'react-native';

const result = 4;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
