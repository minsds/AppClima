import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
 

export default function Cardinhobrancos(props) {
  return (
    <View style={styles.cardinhobrancos}>
        <Text style={{color:'black'}}>{props.hora} </Text>
        <MaterialCommunityIcons style={styles.icone2} name={props.clima} color={props.cor} size={24}/>
        <Text style={{color:'black'}}><strong>{props.textinho}</strong> </Text>
    </View>    
  );
}

const styles = StyleSheet.create({
  cardinhobrancos:{
    backgroundColor:'white',
    fontFamily: 'Trebuchet MS',
    width: 56,
    height: 120,
    marginLeft: 10,
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  icone2:{
    padding: 17,
  }
})