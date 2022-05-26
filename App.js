import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button, SafeAreaView, ImageBackground } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import AnswerScreen from './components/AnswerScreen';

export default function App() {

return (
  <>
  <StatusBar style='light' />
  <LinearGradient
      colors={['#5B4B8A', '#FAD4D4']}
      style={styles.container}
    >
      <ImageBackground
        source={require('./assets/calculation-bg.jpg')}
        resizeMode="cover"
        style={styles.imgContainer}
        imageStyle={styles.backgroundImage}
      >
  <SafeAreaView style={styles.container}>
  <View style={styles.container}>
    <AnswerScreen />
    </View>
  </SafeAreaView>
  </ImageBackground>
  </LinearGradient>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  backgroundImage:{
    opacity:0.15,
  },
  imgContainer:{
    flex:1
  }
});
