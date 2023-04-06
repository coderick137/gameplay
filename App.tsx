import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* adiciona um emoji aqui */}
      <Text>
        code_rick 🚀
      </Text>
      <StatusBar
        style='auto'
        backgroundColor='transparent'
        translucent
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
