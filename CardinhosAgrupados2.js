import { StyleSheet, Text, View } from 'react-native';
import Linha2 from './Linha2';

export default function CardinhosAgrupados2(props) {
  return (
    <View horizontal={true} style={styles.cardinhosAgrupados2}>
        <View>
        <Linha2  hora='3 Oct' clima={'checkbox-blank-circle'} textinho='Monday,'  textinho3='32/31°' cor={'#FFD700'}></Linha2>
        </View>
        <View>
        <Linha2  hora='4 Oct' clima={'weather-rainy'} textinho='Tuesday,'  textinho3='32/31°' cor={'white'}></Linha2>
        </View>
        <View>
        <Linha2  hora='5 Oct' clima={'checkbox-blank-circle'} textinho='Wednesday,'  textinho3='32/31°' cor={'#FFD700'}></Linha2>
        </View>
        <View>
        <Linha2  hora='6 Oct' clima={'cloud'} textinho='Thursday,'  textinho3='32/31°' cor={'white'}></Linha2>
        </View>
        <View>
        <Linha2  hora='7 Oct' clima={'weather-partly-cloudy'} textinho='Friday,'  textinho3='32/31°' cor={'white'}></Linha2>
        </View>
        <View>
        <Linha2  hora='8 Oct' clima={'weather-partly-cloudy'} textinho='Saturday,'  textinho3='32/31°' cor={'white'}></Linha2>
        </View>
        <View>
        <Linha2  hora='9 Oct' clima={'weather-rainy'} textinho='Sunday,'  textinho3='32/31°'  cor={'white'}></Linha2>
        </View>
    </View>   
  );
}

const styles = StyleSheet.create({
  cardinhosAgrupados2:{
    marginRight: 20,
    textAlign: 'center',

  },
})