import { StyleSheet, Text, View } from 'react-native';

export default function Titulo() {
  return (
    <View style={styles.container}>
      <View style={styles.bandung}>
      <Text> <strong>Bandung, </strong></Text>
      </View>
      <View style={styles.indonesia}>
      <Text>Indonésia</Text>
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
  indonesia: {
    fontSize: 30,
  }
});
