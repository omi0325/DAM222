/*Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Saludo} from './componentes/Saludo';
import {Saludo2} from './componentes/Saludo2';
import {Perfil} from './componentes/Perfil';
/* Zona main */
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo React Native</Text>
        <Image source={require("./assets/wave.png")}></Image>
         <Text>---------------------------------------------------</Text>
         <Saludo></Saludo>
         <Saludo/>
         <Saludo2></Saludo2>
         <Saludo2/>
         <Text>---------------------------------------------------</Text>
         <Perfil></Perfil>
      <StatusBar style="auto" />
    </View>
  );
}
/* Zona de estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3ab664',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
