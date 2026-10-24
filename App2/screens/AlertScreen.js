/*Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text} from 'react-native';
/* Zona main */
export default function AlertScreen() {
  return (
    <View style={styles.container}>
      <Text>Aqui va la practica de Aaron y Uriel</Text>
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
