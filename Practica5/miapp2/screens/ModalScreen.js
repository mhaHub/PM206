
/*Zona1: Importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function ModalScreen() {
  return (
    <View style={styles.container}>

        <Text> Aqui va la practica de Rafael </Text>

      <StatusBar style="auto" />

    </View>
  );
}

/*Zona3: Estilos y posicionamientos*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d41b1b',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
});
