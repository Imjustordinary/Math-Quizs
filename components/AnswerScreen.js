import { StyleSheet, Text, View, Alert, Button, SafeAreaView } from 'react-native';
import Quiz from './Quiz';
import History from './History';

export default AnswerScreen =()=> {

    return(
        
        <View style={styles.viewContainer}>
            <Quiz />
            <History />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'stretch'
    },
    viewContainer:{
        marginTop:20,
        flex: 1,
      alignItems:'stretch'
    }
  });