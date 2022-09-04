import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
 

export default function Linha2(props) {
  return (
    <View style={styles.cardinho}>
        <MaterialCommunityIcons style={styles.icone} name={props.clima} color={props.cor} size={24}/>
        <Text style={styles.ladinho}><strong>{props.textinho}</strong> {props.hora}</Text>
        <Text style={{color:'white'}}>{props.textinho3} </Text>
    </View>    
  );
}

const styles = StyleSheet.create({
  cardinho:{
    fontFamily: 'Trebuchet MS',
    marginLeft: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  icone:{
    padding: 25,
  },
  ladinho: {
    color: 'white',
    textAlign: 'left',
  },
})