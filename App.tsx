import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Singin } from './src/screens/Singin';

export default function App() {
  return (
    <View style={styles.container}>
      <Singin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
