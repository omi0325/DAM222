/*Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import {Perfil} from '../componentes/Perfil';
/* Zona main */
export default function Tarjetas() {
  return (
    <View style={styles.container}>
         <Perfil style={styles.fondo} nombre="Edgar" materia="Movil" carrera="TIID" cuatri="5" ></Perfil>
         <Perfil style={styles.fondo2} nombre="emilio" materia="Movil" carrera="TIID" cuatri="5"></Perfil>
         <Perfil style={styles.fondo3} nombre="jenny" materia="Movil" cuatri="5" carrera="TIID"></Perfil>
      <StatusBar style="auto" />
    </View>
  );
}
/* Zona de estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: '#3c7586',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  fondo:{
    backgroundColor:'gold',
  },
  fondo2:{
    backgroundColor:'green',
  },
  fondo3:{
    backgroundColor:'black',
  },
});
