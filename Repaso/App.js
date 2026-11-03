import { StatusBar } from 'expo-status-bar';
import { View,Text,TextInput,Switch,Button,Alert,StyleSheet,ScrollView} from 'react-native';
import { useState } from 'react';
export default function App() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);
  function Enviar(){
    if(nombre===''||carrera===''||semestre==='')
      {
      Alert.alert('Error', 'No dejes campos vacíos');
      return;
    }
    if (isNaN(semestre)) {
      Alert.alert('Error', 'El semestre debe ser numérico');
      return;
    }
    Alert.alert(
      'Registro enviado',
      'Nombre: ' + nombre +
      'Carrera: ' + carrera +
      'Semestre: ' + semestre +
      'Taller: ' + (taller ? 'Sí' : 'No') +
      'Constancia: ' + (constancia ? 'Sí' : 'No') +
      'Deportes: ' + (deportes ? 'Sí' : 'No')
    );
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registro de Evento Universitario</Text>
      <Text style={styles.subtitulo}>Ingresa tus datos</Text>
      <Text style={styles.etiqueta}>Nombre completo:</Text>
      <TextInput style={styles.input} placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}/>
      <Text style={styles.etiqueta}>Carrera:</Text>
      <TextInput style={styles.input} placeholder="Escribe tu carrera"
        value={carrera}
        onChangeText={setCarrera}/>
      <Text style={styles.etiqueta}>Semestre:</Text>
      <TextInput style={styles.input} placeholder="Escribe tu semestre"
        keyboardType="numeric"
        value={semestre}
        onChangeText={setSemestre}/>
      <Text style={styles.subtitulo}>Preguntas del evento</Text>
      <View style={styles.opcion}>
        <Text>¿Asistirá al taller?</Text>
        <Switch value={taller} onValueChange={setTaller}/>
      </View>
      <View style={styles.opcion}>
        <Text>¿Requiere constancia?</Text>
        <Switch value={constancia} onValueChange={setConstancia}/>
      </View>
      <View style={styles.opcion}>
        <Text>¿Participará en actividades deportivas?</Text>
        <Switch value={deportes} onValueChange={setDeportes}/>
      </View>
      <View style={styles.boton}>
        <Button title="Enviar Registro" onPress={Enviar}/>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
   container: {
    flexGrow: 1,
    backgroundColor: '#eaf2f8',
    padding: 20,
    justifyContent: 'center'
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#154360'
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#2874a6'
  },

  etiqueta: {
    fontSize: 16,
    marginTop: 10
  },

  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 12,
    borderRadius: 8,
    marginTop: 5
  },

  opcion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    marginTop: 10,
    borderRadius: 8
  },

  boton: {
    marginTop: 25
  }
});
