import { StyleSheet, Text, View } from 'react-native';

export default function Titulo() {
  return (
    <View style={styles.container}>
      <View>
      <Text style={{fontSize:23}}><strong>Bandung, </strong></Text>
      </View>
      <View>
      <Text style={{fontSize:21.1}}>Indonesia</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'left',
    marginTop: 35,
    marginLeft: 20,
    marginBottom: -100,
  },
});
