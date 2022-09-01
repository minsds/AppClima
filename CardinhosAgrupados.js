import { StyleSheet, Text, View } from 'react-native';
import Cardinho from './Cardinho';

export default function CardinhosAgrupados(props) {
  return (
    <View style={styles.cardinhosAgrupados}>
        <View>
        <Cardinho hora='12:00' clima={'cloud'} textinho='Now'></Cardinho>
        </View>
        <View>
        <Cardinho hora='14:00' clima={'weather-rainy'} textinho='22°'></Cardinho>
        </View>
        <View>
        <Cardinho hora='16:00' clima={'weather-partly-cloudy'} textinho='26°'></Cardinho>
        </View>
        <View>
        <Cardinho hora='18:00' clima={'weather-partly-cloudy'} textinho='25°'></Cardinho>
        </View>
        <View>
        <Cardinho hora='20:00' clima={'checkbox-blank-circle'} textinho='31°'></Cardinho>
        </View>
    </View>    
  );
}

const styles = StyleSheet.create({
  cardinhosAgrupados:{
    flexDirection: 'row',
    marginRight: 20,
  }
})