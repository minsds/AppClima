import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function InfoCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.cima}>WIND</Text>
      <Text style={styles.baixo}>19.2km/j</Text>
      <Text style={styles.cima}>FEELS LIKE</Text>
      <Text style={styles.baixo}>25°</Text>
      <Text style={styles.cima}>INDEX UV</Text>
      <Text style={styles.baixo}>2</Text>
      <Text style={styles.cima}>PRESSURE</Text>
      <Text style={styles.baixo}>1014 mbar</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        margin:10,
        minWidth:150,
    },
    cima:{
        color: '#D3D3D3',
        margin: 5,
        marginLeft: 15,
        fontSize: 10,
    },
    baixo:{
        color: 'white',
        margin: 5,
        marginLeft: 15,
        fontSize: 10,
        fontFamily: 'Trebuchet MS',
    },
});
