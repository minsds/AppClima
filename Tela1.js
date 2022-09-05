import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AcimaClimas from '../componentes/AcimaClimas';
import Cabeçalho from '../componentes/Cabecalho';
import Card1 from '../componentes/Card1';
import CardinhosAgrupados from '../componentes/CardinhosAgrupados.js';
import Titulo from '../componentes/Titulo';

export default function Tela1() {
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
  },
  container:{
    height: 882,
    width: 400,
  }
});
