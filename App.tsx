import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { AnimatedList } from './src/components/AnimatedList/AnimatedList';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AnimatedList />
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
