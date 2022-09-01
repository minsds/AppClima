import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AcimaClimas() {
  return (
    <View style={styles.acimaClimas}>
        <Text style={styles.preto}><strong>Today</strong></Text>
        <Text style={styles.cinza}>Next 7 Days   <MaterialIcons name="arrow-forward-ios" size={12} color="#696969" /></Text>
    </View>    
  );
}

const styles = StyleSheet.create({
  acimaClimas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight:20,
    marginTop: 20,
  },
  cinza:{
    color:'#696969',
    fontSize: 18,
    fontFamily: 'Trebuchet MS',
  },
  preto: {
    fontSize: 18,
    fontFamily: 'Trebuchet MS',
  }
});