import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router'; 

export default function ConsultaUsuariosScreen() {

  const [usuarios, setUsuarios] = useState([]);

  const router = useRouter();

  const obtenerUsuarios = async () => { 
    try {
      const respuesta = await fetch('http://192.168.100.95:5000/v1/usuarios');
      const datos = await respuesta.json();
      console.log("Respuesta API: ", datos);
      setUsuarios(datos.usuarios)
    } catch (error) {
      console.log("Error API: ", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      obtenerUsuarios();
    }, [])
  );

  useEffect(() => { obtenerUsuarios(); }, [])

  const renderTarjeta = ({ item }) => (
    <View style={styles.card}>

      <Text style={styles.nombre}>
        {item.nombre}
      </Text>

      <View style={styles.linea}></View>

      <Text style={styles.info}>
        Edad: {item.edad} años
      </Text>

      <TouchableOpacity
        style={styles.detalle}
        onPress={() =>
          router.push({
            pathname: '/detalle',
            params: {
              usuario: JSON.stringify(item),
            },
          })
        }
      >
        <Text style={styles.textoDetalle}>
          Ver detalle →
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>
        Lista de Usuarios
      </Text>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id}
        renderItem={renderTarjeta}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

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
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    elevation: 4,

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
  },

  linea: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 10,
  },

  info: {
    fontSize: 16,
    color: '#4B5563',
  },

  detalle: {
    alignSelf: 'flex-end',
    marginTop: 12,
  },

  textoDetalle: {
    color: '#2563EB',
    fontSize: 15,
    fontWeight: 'bold',
  },
});