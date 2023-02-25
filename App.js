// import LoginScreen from './src/Screens/LoginScreen';
import RegistrationScreen from './src/Screens/RegistrationScreen';

import { StyleSheet, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
