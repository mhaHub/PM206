
/*Zona1: Importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, Pressable } from 'react-native';
import React, {useState} from 'react';

export default function ModalBottomSheet(){

  const [modalVisible, setModalVisible] = useState(false);

  return(
    <View style = {styles.container}>
      <Text style = {styles.titulo}>
        Ejemplo de Modal y BottomsSheet
      </Text>

      <Button title='Abrir Modal' onPress={() => setModalVisible(true)}
      />

      <Modal animationType="slide" transparent = {true} visible = {modalVisible}>
        <View style = {styles.fondo}>
          <View style = {styles.bottomSheet}>
            <Text style = {styles.texto}>
              Hola este es un BottomSheet
            </Text>

            <Pressable style = {styles.boton} onPress = {() => setModalVisible(false)}>
              <Text style = {styles.textoBoton}>
                Cerrar 
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )

}


/*Zona3: Estilos y posicionamientos*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fondo: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  bottomSheet: {
    backgroundColor: '#fff',
    padding: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
    marginBottom: 20,
  },
  boton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});