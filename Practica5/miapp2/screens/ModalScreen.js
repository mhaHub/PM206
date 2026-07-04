/*Zona1: Importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function ModalBottomSheet() {

  const [modalVisible, setModalVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Ejemplo de Modal y BottomSheet
      </Text>

      {/* Botón para abrir el Modal */}
      <Button
        title="Abrir Modal"
        onPress={() => setModalVisible(true)}
      />

      <View style={{ height: 15 }} />

      {/* Botón para abrir BottomSheet */}
      <Button
        title="Abrir BottomSheet"
        onPress={() => setBottomVisible(true)}
      />

      {/* MODAL CLÁSICO */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalFondo}>

          <View style={styles.modalContainer}>

            <Text style={styles.modalTitulo}>
              Registro de Usuario
            </Text>

            <TextInput
              placeholder="Nombre"
              style={styles.input}
            />

            <TextInput
              placeholder="Correo electrónico"
              style={styles.input}
            />

            <View style={styles.botones}>

              <Pressable
                style={styles.botonGuardar}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textoBoton}>
                  Guardar
                </Text>
              </Pressable>

              <Pressable
                style={styles.botonCancelar}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textoBoton}>
                  Cancelar
                </Text>
              </Pressable>

            </View>

          </View>

        </View>
      </Modal>

      {/* BOTTOM SHEET */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={bottomVisible}
      >
        <View style={styles.fondo}>
          <View style={styles.bottomSheet}>

            <Text style={styles.texto}>
              Hola este es un BottomSheet
            </Text>

            <Pressable
              style={styles.boton}
              onPress={() => setBottomVisible(false)}
            >
              <Text style={styles.textoBoton}>
                Cerrar
              </Text>
            </Pressable>

          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
  },

  titulo:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:25,
  },

  /* Modal */

  modalFondo:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.5)',
  },

  modalContainer:{
    width:'85%',
    backgroundColor:'#fff',
    borderRadius:15,
    padding:20,
    elevation:10,
  },

  modalTitulo:{
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:20,
  },

  input:{
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:8,
    padding:10,
    marginBottom:15,
  },

  botones:{
    flexDirection:'row',
    justifyContent:'space-between',
  },

  botonGuardar:{
    backgroundColor:'#4CAF50',
    padding:10,
    borderRadius:8,
    width:'45%',
    alignItems:'center',
  },

  botonCancelar:{
    backgroundColor:'#F44336',
    padding:10,
    borderRadius:8,
    width:'45%',
    alignItems:'center',
  },

  /* BottomSheet */

  fondo:{
    flex:1,
    justifyContent:'flex-end',
    backgroundColor:'rgba(0,0,0,0.4)',
  },

  bottomSheet:{
    backgroundColor:'#fff',
    padding:25,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    alignItems:'center',
  },

  texto:{
    fontSize:20,
    marginBottom:20,
  },

  boton:{
    backgroundColor:'#2196F3',
    paddingHorizontal:25,
    paddingVertical:10,
    borderRadius:8,
  },

  textoBoton:{
    color:'#fff',
    fontWeight:'bold',
  }

});