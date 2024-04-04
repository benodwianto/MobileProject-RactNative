import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './Style'; // Mengimpor gaya dari file Style.js

export default function App() {
  return ( 
    <View style={styles.container}>
      <Text>Must a nice,Must a Nice</Text>
      <StatusBar style="auto" />
    </View>
  );
}
