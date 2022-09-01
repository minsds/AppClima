import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
 

export default function Cardinho(props) {
  return (
    <View style={styles.cardinho}>
        <Text style={{color:'white'}}>{props.hora}</Text>
        <MaterialCommunityIcons name={props.clima} size={24} color="white" />
        <Text style={{color:'white'}}><strong>{props.textinho}</strong></Text>
    </View>    
  );
}

const styles = StyleSheet.create({
  cardinho:{
    backgroundColor:'#4A73FC',
    fontFamily: 'Trebuchet MS',
    width: 56,
    height: 120,
    marginLeft: 10,
    backgroundColor: '#4A73FC',
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 20,
  },
})