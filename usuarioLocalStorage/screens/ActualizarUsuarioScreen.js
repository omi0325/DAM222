
import React, { useState } from 'react';
import {
  SafeAreaView, View, Text, TextInput,
  Pressable, StyleSheet
} from 'react-native';

import {router, useLocalSearchParams} from 'expo-router';

export default function ActualizarUsuarioScreen() {

  const params = useLocalSearchParams();

  const [nombre, setNombre] = useState(params.nombre);
  const [edad, setEdad] = useState(params.edad);

  // Actualizar usuario en LocalStorage
  const actualizarUsuario = () => {

    if (nombre === '' || edad === '') {
      alert('Todos los campos son obligatorios');
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    for (let i = 0; i < usuarios.length; i++) {

      if (usuarios[i].id === params.id) {

        usuarios[i].nombre = nombre;
        usuarios[i].edad = edad;

        break;
      }

    }

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Usuario actualizado correctamente');

    router.dismissTo('/consulta');
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>
        Actualizar Usuario
      </Text>

      <View style={styles.card}>

        <Text style={styles.label}>
          Nombre
        </Text>

        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Nombre"
        />

        <Text style={styles.label}>
          Edad
        </Text>

        <TextInput
          style={styles.input}
          value={edad}
          onChangeText={setEdad}
          placeholder="Edad"
          keyboardType="numeric"
        />

        <Pressable
          style={styles.boton}
          onPress={actualizarUsuario}
        >
          <Text style={styles.textoBoton}>
            Guardar cambios
          </Text>
        </Pressable>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 25,
    elevation: 5,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },

  boton: {
    backgroundColor: '#FACC15',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBoton: {
    color: '#1F2937',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
