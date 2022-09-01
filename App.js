import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AcimaClimas from './src/componentes/AcimaClima';
import Cabeçalho from './src/componentes/Cabecalho';
import Card1 from './src/componentes/Card1';
import CardinhosAgrupados from './src/componentes/CardinhosAgrupados.js';
import Titulo from './src/componentes/Titulo';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewcabeçalho}>
        <Cabeçalho></Cabeçalho>
      </View>
      <View style={styles.viewtitulo}>
        <Titulo></Titulo>
      </View>
      <View style={styles.viewcard}>
        <StatusBar style="auto" />
        <Card1></Card1>
      </View>
      <div>
      <View>
        <AcimaClimas></AcimaClimas>
      </View>
      <View>
        <CardinhosAgrupados></CardinhosAgrupados>
      </View>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  viewcard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewtitulo:{
    alignItems: 'left',
    justifyContent: 'left',
  }
});
