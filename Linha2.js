import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
 

export default function Linha2(props) {
  return (
    <View style={styles.cardinho}>
        
        <Text><Text style={styles.ladinho}>  <MaterialCommunityIcons style={styles.icone} name={props.clima} color={props.cor} size={24}/> <strong>{props.textinho}</strong></Text><Text style={styles.hora}> {props.hora} </Text></Text>
        <Text> <Text style={styles.text3}> {props.textinho3} </Text> <Text style={styles.text4}>{props.textinho4} </Text> </Text>

    </View>    
  );
}

const styles = StyleSheet.create({
  cardinho:{
    fontFamily: 'Trebuchet MS',
    marginLeft: 10,
    borderRadius: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,

  },

  ladinho: {
    color: 'white',
  },
  text3: {
    fontSize: 20,
    color: 'white',

  },
  text4: {
    color:'#D3D3D3',
    textAlign: 'right',
  },
  hora: {
    color: '#D3D3D3',
  }
})
