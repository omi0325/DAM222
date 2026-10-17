/*Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import {Perfil} from './componentes/Perfil';
/* Zona main */
export default function App() {
  return (
    <View style={styles.container}>
         <Perfil nombre="Edgar" materia="Movil"></Perfil>
         <Perfil nombre="emilio" cuatri="5"></Perfil>
         <Perfil nombre="jenny" carrera="TIID"></Perfil>
      <StatusBar style="auto" />
    </View>
  );
}
/* Zona de estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b1c90',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
