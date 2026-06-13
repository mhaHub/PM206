
/*Zona1: Importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';
import { Perfil } from './components/Perfil';

/*Zona2: Main - Hogar de los componentes*/
export default function App() {
  return (
    <View style={styles.container}>

      

      <Perfil nombre="Diego Rivera Diaz" carrera="Sistemas" materia="P Movil" cuatri="9"></Perfil>

      <Text>---------------------------------------------------</Text>

      <Text>---------------------------------------------------</Text>

      <Perfil 
      nombre="Frosty" 
      carrera="Musica" 
      materia="Notas" 
      cuatri="egresado">
      </Perfil>


      <StatusBar style="auto" />

    </View>
  );
}

/*Zona3: Estilos y posicionamientos*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
