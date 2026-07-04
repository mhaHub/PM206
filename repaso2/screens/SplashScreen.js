/* Zona 1: Importaciones */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

/* Zona 2: Función principal */
export default function SplashScreen() {
  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.texto}>
        repa2
      </Text>

    </View>
  );
}

/* Zona 3: Estilos */
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 15,
  },

  texto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },

});