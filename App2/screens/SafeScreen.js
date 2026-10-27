/*Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text,ScrollView,SafeAreaView} from 'react-native';
/* Zona main */
export default function SafeScreen() {
  return (
      <SafeAreaView style={styles.SafeArea}>
        <ScrollView contentContainerStyle={styles.ScrollContent}>
          <Text style={styles.title}>Practica de equipo</Text>
          <Text style={styles.subtitle}>Desliza hacia abajo para ver mas</Text>
          {[...Array(15)].map((_,index)=>(
            <View key={index} style={styles.box}>
              <Text>Registro de prueba {index + 1}</Text>
            </View>
          ))}
          <StatusBar style="auto"/>
        </ScrollView>
      </SafeAreaView>
  );
}
/* Zona de estilos y posicionamiento */
const styles = StyleSheet.create({
  SafeArea:{
    flex:1,
    backgroundColor:'gold',
  },
  ScrollContent:{
    padding:20,
    alignItems:'Center',
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    marginTop:10 
  },
  subtitle:{
    fontSize:16,
    color:'#d62929',
    marginBottom:20
  },
  box:{
    backgroundColor:'white',
    width:'90%',
    padding:30,
    marginVertical:10,
    borderRadius:8,
    elevation:3,
  }
});
