import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function InfoCard() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', borderColor: 'white',
    borderWidth: 1, paddingVertical: 18, paddingHorizontal: 45}}>
        <MaterialCommunityIcons name={'weather-windy'} color={'white'} size={24} />
        <View>
          <Text style={styles.cima}>WIND</Text>
          <Text style={styles.baixo}>19.2km/j</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', borderColor: 'white',
    borderWidth: 1, paddingVertical: 18,  paddingHorizontal: 45}}>
        <MaterialCommunityIcons name={'thermometer'} color={'white'} size={24} />
        <View>
          <Text style={styles.cima}>FEELS</Text>
          <Text style={styles.baixo}>25°</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', borderColor: 'white',
    borderWidth: 1, paddingVertical:18,  paddingHorizontal: 45}}>
        <MaterialCommunityIcons name={'weather-sunny'} color={'white'} size={24} />
        <View>
          <Text style={styles.cima}>INDEX UV</Text>
          <Text style={styles.baixo}>2</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', borderColor: 'white',
    borderWidth: 1, paddingVertical:18,  paddingHorizontal: 45}}>
        <MaterialCommunityIcons name={'triangle-wave'} color={'white'} size={24} />
        <View>
          <Text style={styles.cima}>PRESSURE</Text>
          <Text style={styles.baixo}>1014 mbar</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    alignItems: 'center',
    minWidth: 150,
 
  },
  cima: {
    color: '#D3D3D3',
    margin: 5,
    marginLeft: 15,
    fontSize: 13,
  
  },
  baixo: {
    color: 'white',
    margin: 5,
    marginLeft: 15,
    fontSize: 13,
    fontFamily: 'Trebuchet MS',
  },
});
