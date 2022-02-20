import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import Map from './components/Map';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
