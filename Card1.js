import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import InfoCard from './InfoCard';

export default function Card1() {
  return (
    <View style={styles.container}>
        <MaterialCommunityIcons name="weather-pouring" style={{marginTop:5}} size={60} color="white" />
      <Text style={styles.tempo}>Heavy Rain</Text>
      <Text style={styles.data}>Sunday, 02 Oct</Text>
      <Text style={styles.temp}> 24°</Text>
      <StatusBar style="auto" />
      <View style={styles.InfoCard}>
        <InfoCard></InfoCard>
    </View>
   </View>

  );
}

const styles = StyleSheet.create({
  container: {
    width: 343,
    margin: 10,
    height: 443,
    marginTop: 100,
    backgroundColor: '#4A73FC',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tempo: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Trebuchet MS',
  },
  data: {
    color:'#D3D3D3',
    fontSize: 14,
    fontFamily: 'Trebuchet MS',
  },
  temp:{
    color: 'white',
    fontSize: 80,
    fontFamily: 'Trebuchet MS',
  },
  cima:{
    color: '#D3D3D3',
  },
  baixo:{
    color: 'white',
  },

});
