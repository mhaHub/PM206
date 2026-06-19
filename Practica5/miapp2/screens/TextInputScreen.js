
/*Zona1: Importaciones de componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function TextInputScreen() {
  return (
    <View style={styles.container}>

        <Text> Aqui va la parctica de Luis Eduardo </Text>

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
});
