import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tela1 from './src/Telas/Tela1';
import Tela2 from './src/telas/Tela2';

export default function App() {
  return (
    <View>
      <Tela1></Tela1>
      <Tela2></Tela2>
    </View>
  );
}
