/*Zona de importaciones */
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text,Image, Pressable,Switch} from 'react-native';
import SwitchEjem from '../componentes/SwitchEjem';
/* Zona main */
export default function PressableScreen() {
  const[imagenGRANDE,setImagenGrande]=useState(false)
  const[oscuro,SetOscuro]=useState(false)
  return (
    <View style={[styles.container,{backgroundColor:oscuro? '#0000':'#ffffff'}]}>
      <Pressable>
        <Text>Presioname</Text>
      </Pressable>
      <Pressable 
        onPress={()=>setImagenGrande(!imagenGRANDE)}
      >
        <Image source={require("../assets/wave.png")} style={[
          styles.image,
          imagenGRANDE ? styles.imagenGRANDE : styles.image
        ]}></Image>
      </Pressable>
      <SwitchEjem oscuro={oscuro}
      CambiarModo={SetOscuro}/>
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
  texto:{
    fontSize:20,
    marginBottom:20,
  },
  image:{
    width:100,
    height:100,
  },
  imagenGRANDE:{
    width:180,
    height:180,
  },
});
