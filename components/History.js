import { StyleSheet, Text, View, Alert, Button, FlatList } from 'react-native';

export default HistoryPart = (props)=> {
    
    return(
        <View style={styles.container}>
            <View style={styles.historyTextContainer}>
                <Text style={styles.historyText}>History</Text>
            </View>
            <View style={styles.historyViewContainer}>
                <FlatList data={props.answeredQuiz} 
                renderItem={item=> {
                    return(
                        <View style={item.item.result==='right'?styles.eachHistoryR:styles.eachHistoryW}>
                        <Text style={item.item.result==='right'?styles.eachHistoryTextR:styles.eachHistoryTextW}>{item.item.quiz}</Text>
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'stretch'
    },
    historyTextContainer:{
        
        alignItems:'center'
    },
    historyText:{
        fontWeight:'600',
        fontSize:24,
        color:'#06113C',
        borderWidth:2,
        borderColor:'#06113C',
        paddingHorizontal:12,
        paddingVertical:5,
        marginVertical:12
    },
    historyViewContainer:{
        
       
      alignItems:'stretch'
    },
    eachHistoryR:{
        marginHorizontal:12,
        backgroundColor:'#F7E9D7',
        padding:12,
        borderRadius:10,
        marginBottom:10
    },
    eachHistoryTextR:{
        textAlign:'center',
        fontSize:20,
        color:'#4C3575',
        fontWeight:'600'
    },
    eachHistoryW:{
        marginHorizontal:12,
        backgroundColor:'#06113C',
        padding:12,
        borderRadius:10,
        marginBottom:10
    },
    eachHistoryTextW:{
        textAlign:'center',
        fontSize:20,
        color:'#F7E9D7',
        fontWeight:'600'
    }
  });