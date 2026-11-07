
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Pressable, Image,ActivityIndicator, TextInput, FlatList, Alert, ScrollView} from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (showSplash) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHaXZCqs45mG03rpNstvrt0DdBgL77o38ZEdSGVcI64Q&s=10' }}
          style={{ width: 200, height: 200, marginTop: 20 }}/>
        <Text style={styles.splashLoading}>Cargando........</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  const agregarLibro = () => {
    if (titulo.trim() === '' || autor.trim() === '' || genero.trim() === '') {
      Alert.alert('Aviso', 'Completa todos los campos');
    } else {
      setCargando(true);
      setTimeout(() => {
        setLibros([...libros,
          {
            id: (libros.length + 1).toString(),
            titulo: titulo,
            autor: autor,
            genero: genero
          }
        ]);
        setTitulo('');
        setAutor('');
        setGenero('');
        setCargando(false);
        Alert.alert('Correcto', 'Libro guardado correctamente');
      }, 4000);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/3222255/pexels-photo-3222255.jpeg?cs=tinysrgb&dpr=1&w=500' }}style={styles.fondo} resizeMode="cover"/>
      <ScrollView style={styles.lista}>
        <View style={styles.contenido}>
          <Text style={styles.titulo}>Registro de Libros Leidos</Text>
          <TextInput style={styles.input} placeholder="Título del libro" value={titulo}onChangeText={setTitulo}/>
          <TextInput style={styles.input} placeholder="Autor" value={autor}onChangeText={setAutor}/>
          <TextInput style={styles.input} placeholder="Género" value={genero} onChangeText={setGenero}/>
          <Pressable style={styles.boton} onPress={agregarLibro} disabled={cargando}>
            <Text style={styles.textoBoton}>Agregar libro</Text>
          </Pressable>
          {cargando && (
            <View>
              <ActivityIndicator size="large" color="#7ba179" />
              <Text style={styles.texto}>Guardando libro...</Text>
            </View>
          )}
          <Text style={styles.subtitulo}>Mis libros registrados</Text>
          <FlatList
            data={libros}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={styles.tarjeta}>
                <Text style={styles.texto}>Título: {item.titulo}</Text>
                <Text style={styles.texto}>Autor: {item.autor}</Text>
                <Text style={styles.texto}>Género: {item.genero}</Text>
              </View>
            )}
            ListEmptyComponent={
              <Text style={styles.texto}>
                Todavía no hay libros registrados
              </Text>
            }
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fondo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  lista: {
    flex: 1,
    width: '100%',
  },
  contenido: {
    padding: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 25,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
  },
  boton: {
    backgroundColor: '#7ba179',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  texto: {
    color: '#fff',
    fontSize: 16,
    margin: 5,
  },
  tarjeta: {
    backgroundColor: '#7ba179',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    width: '100%',
  },
  splashLoading: {
    fontSize: 20,
    marginTop: 15,
  },
});
