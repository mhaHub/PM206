
/*Zona1: Importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput, 
  KeyboardAvoidingView, 
  ActivityIndicator, 
  Platform, 
  Image } from 'react-native';

export default function ActivityIndicadorScreen() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGuardar = () => {
    if(nombre.trim() === '' || carrera.trim() === ''){
      alert('Por favor llena todos los campos');
      return;
    }
  

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert('Perfil guardado con exito');

      setNombre('');
      setCarrera('');
    }, 3000);

  };


  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior= {Platform.OS === 'ios' ? 'padding' : 'height'}
        style = {styles.fromContainer}
      >
        <View>
          <View>
            <Text style = {styles.titulo}>Agregar perfil</Text>
            <TextInput
              style = {styles.input}
              placeholder="Nombre Completo"
              value= {nombre}
              onChangeText={setNombre}
            />
            <Text style = {styles.titulo}>Agregar perfil</Text>
            <TextInput
              style = {styles.input}
              placeholder="Carrera"
              value= {carrera}
              onChangeText={setCarrera}
            />
          </View>
          <View style = {styles.actionArea}>
              {isLoading ? (
                <ActivityIndicadorScreen/>
              ) : (
                 <Button title='Guardar Perfil' onPress={handleGuardar} color = "#4D96FF"/>
              )}
          </View>
        </View>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

/*Zona3: Estilos y posicionamientos*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  formContainer: {
    flex: 1, 
  },
  formContainerInner: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between', 
  },
  formBody: {
    flex: 1, 
    justifyContent: 'center', 
  },
  actionArea: {
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50, 
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  loader: {
    marginVertical: 10,
  }
});
