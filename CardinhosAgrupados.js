import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';
import Cardinho from './Cardinho';
import Cardinhobrancos from './cardinhobrancos';

export default function CardinhosAgrupados(props) {
  return (
    <ScrollView horizontal={true} style={styles.cardinhosAgrupados}>
        <View>
        <Cardinho hora='12:00' clima={'cloud'} textinho='Now' cor={'white'}></Cardinho>
        </View>
        <View>
        <Cardinhobrancos hora='14:00' clima={'weather-rainy'} textinho='22°' colortext={'black'} cor={'blue'}></Cardinhobrancos>
        </View>
        <View>
        <Cardinhobrancos hora='16:00' clima={'weather-partly-cloudy'} textinho='26°' cor={'blue'}></Cardinhobrancos>
        </View>
        <View>
        <Cardinhobrancos hora='18:00' clima={'weather-partly-cloudy'} textinho='25°' cor={'blue'}></Cardinhobrancos>
        </View>
        <View>
        <Cardinhobrancos hora='20:00' clima={'checkbox-blank-circle'} textinho='31°' cor={'#FFD700'}></Cardinhobrancos>
        </View>
        <View>
        <Cardinhobrancos hora='22:00' clima={'weather-partly-cloudy'} textinho='29°' cor={'blue'}></Cardinhobrancos>
        </View>
    </ScrollView>   
  );
}

const styles = StyleSheet.create({
  cardinhosAgrupados:{
    flexDirection: 'row',
    marginRight: 20,
    marginBottom: 20,
  },
})
