import { StyleSheet, Text, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Cabeçalho() {
  return (
    <View style={styles.cabeçalho}>
        <SimpleLineIcons name="menu" size={24} color="black" />
        <Entypo name="dots-three-horizontal" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  cabeçalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight:20,
    marginTop: 20,
  },
});
