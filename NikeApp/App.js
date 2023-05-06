import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';

import ProductScreen from './src/screens/ProductScreen';
import ProductdetailsScreen from './src/screens/ProductdetailsScreen';
import ShoppigCart from './src/screens/ShoppigCart';
import Navigation from './src/Navigation';



export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
     {/* <ProductScreen/> */}
     {/* <ProductdetailsScreen/> */}
     {/* <ShoppigCart/> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  
});
