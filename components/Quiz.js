import {
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Platform,
} from "react-native";
import { useEffect, useState } from "react";

export default QuizPart = (props) => {
  const [firstNum, setFirstNum] = useState();
  const [secNum, setSecNum] = useState();
  const [answer, setAnswer] = useState();
  const [symbol, setSymbol] = useState();
  const [decimal, setDecimal] = useState(false)

  const [userAns, setUserAns] = useState("");

  const changeHandler = (input) => {
    setUserAns(input);
  };

  const onSubmitHandler = () => {
    if (userAns.length < 1) {
      showAlert();
      return
    }
    else if(!decimal){
        if (parseInt(userAns) == answer) {
            console.log("right");
            let quiz = firstNum.toString().concat(' ',symbol,' ',secNum,' ','=',' ',answer)
            console.log(quiz)
            let id = Math.random().toString()
            let result = 'right'
            props.addAnsweredQuiz(id, quiz, result)
          } 
        else {
            console.log("wrong");
            let quiz = firstNum.toString().concat(' ',symbol,' ',secNum,' ','=',' ',answer)
            console.log(quiz)
            let id = Math.random().toString()
            let result = 'wrong'
            props.addAnsweredQuiz(id, quiz, result)
          }
    }
    else{
        if (parseFloat(userAns) == answer) {
            console.log("right");
            let quiz = firstNum.toString().concat(' ',symbol,' ',secNum,' ','=',' ',answer)
            console.log(quiz)
            let id = Math.random().toString()
            let result = 'right'
            props.addAnsweredQuiz(id, quiz, result)
          } else {
            console.log("wrong");
            let quiz = firstNum.toString().concat(' ',symbol,' ',secNum,' ','=',' ',answer)
            console.log(quiz)
            let id = Math.random().toString()
            let result = 'wrong'
            props.addAnsweredQuiz(id, quiz, result)
          }
    }
    
    generateQuiz();
    setUserAns("");
  };

  const generateQuiz = () => {
    let max = 50;
    let min = 1;
    let firstOne = Math.floor(Math.random() * (max - min + 1) + min);
    let secOne = Math.floor(Math.random() * (max - min + 1) + min);
    setFirstNum(firstOne);
    setSecNum(secOne);

    let symIndex = Math.floor(Math.random() * 4 + 1);
    if (symIndex == 1) {
      setAnswer(firstOne + secOne);
      setSymbol("+");
    } else if (symIndex == 2) {
      setAnswer(firstOne - secOne);
      setSymbol("-");
    } else if (symIndex == 3) {
      setAnswer(firstOne * secOne);
      setSymbol("x");
    } else if (symIndex == 4) {
        let divisionAns
        divisionAns = firstOne / secOne
       if(Number.isInteger(divisionAns)){
           setAnswer(divisionAns)
           setDecimal(false)
       }
       else{
           setAnswer(divisionAns.toFixed(2))
           setDecimal(true)
       }
      setSymbol("÷");
    }
  };

  const showAlert = () =>
    Alert.alert(
      "Warning",
      "Please fill in the blank!",

      [
        {
          text: "Ok",
          style: "cancel",
        },
      ]
    );

  useEffect(() => {
    generateQuiz();
  }, []);

  return (
    
      <View style={styles.quizContainer}>
        <View>
          <Text style={styles.quizText}>
            {firstNum} {symbol} {secNum} = ?
          </Text>
        </View>
        <View>
          <TextInput
            maxLength={4}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.quizInput}
            onChangeText={changeHandler}
            value={userAns}
          />
        </View>
        <View style={styles.containerBut}>
          <Pressable
            style={styles.quizButton}
            onPress={onSubmitHandler}
            android_ripple={{ color: "#9BA3EB" }}
          >
            <Text style={styles.quizButText}>Submit</Text>
          </Pressable>
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBut: {
    borderRadius: 16,
    marginTop: 12,
    marginBottom: 24,
    overflow: "hidden",
  },
  quizContainer: {
    margin: 12,
    backgroundColor: "#4C3575",
    alignItems: "center",
    borderRadius: 20,
  },
  quizText: {
    fontSize: 32,
    color: "#FFF2F2",
    paddingVertical: 24,
  },
  quizInput: {
    fontSize: 28,
    width: 65,
    borderBottomWidth: 1,
    borderBottomColor: "#FFF2F2",
    marginBottom: 7,
    color: "#FFF2F2",
    textAlign: "center",
  },
  quizButton: {
    backgroundColor: "#646FD4",
    justifyContent: "center",
    alignItems: "center",
  },
  quizButText: {
    fontSize: 20,
    color: "#FFF2F2",
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
});
