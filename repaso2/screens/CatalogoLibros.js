/* Zona 1: Importaciones */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Pressable,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';

/* Zona 2: Función principal */
export default function CatalogoLibros() {

  // Estados
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  const [libros, setLibros] = useState([]);
  const [guardando, setGuardando] = useState(false);

  // Función para agregar libro
  const agregarLibro = () => {

    if (
      titulo.trim() === '' ||
      autor.trim() === '' ||
      genero.trim() === ''
    ) {
      Alert.alert(
        'Campos vacíos',
        'Todos los campos son obligatorios.'
      );
      return;
    }

    setGuardando(true);

    setTimeout(() => {

      const nuevoLibro = {
        id: Date.now().toString(),
        titulo,
        autor,
        genero,
      };

      setLibros([...libros, nuevoLibro]);

      setTitulo('');
      setAutor('');
      setGenero('');

      setGuardando(false);

      Alert.alert(
        'Éxito',
        'Libro guardado correctamente.'
      );

    }, 4000);

  };

  return (

    <ImageBackground
      source={require('../assets/fondo.jpg')}
      style={styles.fondo}
    >

      <View style={styles.overlay}>

        <Text style={styles.tituloPrincipal}>
          Catálogo de Libros
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          value={titulo}
          onChangeText={setTitulo}
        />

        <TextInput
          style={styles.input}
          placeholder="Autor"
          value={autor}
          onChangeText={setAutor}
        />

        <TextInput
          style={styles.input}
          placeholder="Género"
          value={genero}
          onChangeText={setGenero}
        />

        <Pressable
          style={styles.boton}
          onPress={agregarLibro}
          disabled={guardando}
        >

          <Text style={styles.textoBoton}>
            {guardando ? "Guardando..." : "Agregar Libro"}
          </Text>

        </Pressable>

        {
          guardando && (

            <View style={styles.loading}>

              <ActivityIndicator
                size="large"
                color="#2196F3"
              />

              <Text style={styles.guardando}>
                Guardando libro...
              </Text>

            </View>

          )
        }

        <Text style={styles.total}>
          Total de libros: {libros.length}
        </Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (

            <View style={styles.card}>

              <Text style={styles.nombreLibro}>
                {item.titulo}
              </Text>

              <Text>
                Autor: {item.autor}
              </Text>

              <Text>
                Género: {item.genero}
              </Text>

            </View>

          )}
        />

      </View>

    </ImageBackground>

  );

}

/* Zona 3: Estilos */

const styles = StyleSheet.create({

      fondo: {
    flex: 1,
    resizeMode: 'cover',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.65)',
    padding: 20,
    paddingTop: 60,
  },

  tituloPrincipal: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#000',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  boton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

  loading: {
    alignItems: 'center',
    marginBottom: 20,
  },

  guardando: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },

  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },

  nombreLibro: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

});