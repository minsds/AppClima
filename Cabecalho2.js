import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Cabeçalho2() {
  return (
    <View style={styles.container}>
        <Text style={styles.icone}><MaterialIcons name="arrow-forward-ios" size={12} color='#ffff' /></Text>
        <Text style={styles.cinza}><strong>Bandung, </strong>Indonesia </Text>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 99,
    marginTop: 25,
  },
  cinza:{
    color:'#ffff',
    fontSize: 20,
    fontFamily: 'Trebuchet MS',
    textAlign: 'center',
  },
  icone: {
    fontSize: 20,
    fontFamily: 'Trebuchet MS',
  }
});