import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cabeçalho2 from '../componentes/Cabecalho2';
import CardinhosAgrupados2 from '../componentes/CardinhosAgrupados2';
import Linha2 from '../componentes/Linha2';
import Titulo2 from '../componentes/Titulo2';

export default function Tela2() {
  return (
    <View style={styles.container}>
      <View>
        <Cabeçalho2></Cabeçalho2>
      </View>
      <View>
        <Linha2></Linha2>
      </View>
      <View>
        <Titulo2></Titulo2>
      </View>
      <div>
      <View>
        <CardinhosAgrupados2></CardinhosAgrupados2>
      </View>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#4A73FC',
  },
});