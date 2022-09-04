import { StyleSheet, Text, View } from 'react-native';

export default function Titulo2() {
  return (
    <View style={styles.container}>
      <View>
      <Text style={{fontSize:21.1,color:'#ffff'}}>Next 7 days </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'left',
    marginTop: -10,
    marginBottom: 10,
    marginLeft: 20,
  },
});