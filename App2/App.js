/*Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import MenuScreen from './screens/MenuScreen';
/* Zona main */
export default function App() {
  return (
    <View style={styles.container}>
        <MenuScreen></MenuScreen>
      <StatusBar style="auto" />
    </View>
  );
}
/* Zona de estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: '#3c7586',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
