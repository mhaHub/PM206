
/*Zona1: Importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Perfil } from '../components/Perfil';

/*Zona2: Main - Hogar de los componentes*/
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>

      

      <Perfil style={styles.tarjetaRoja} nombre="Diego Rivera Diaz" carrera="Sistemas" materia="P Movil" cuatri="9"></Perfil>


      <Perfil 
      style={styles.tarjetaVerde}
      nombre="Frosty" 
      carrera="Musica" 
      materia="Notas" 
      cuatri="egresado">
      </Perfil>

      <Perfil style={styles.tarjetaRoja} nombre="Jack" carrera="Sistemas" materia="P Movil" cuatri="9"></Perfil>


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
    flexDirection: 'column'
  },
  
  tarjetaRoja: {
    backgroundColor: '#FF6B6B'
  },
  tarjetaVerde: {
    backgroundColor: '#6BCB77'
  },
});
