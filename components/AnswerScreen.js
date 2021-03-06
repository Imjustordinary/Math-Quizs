import {
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  SafeAreaView,
} from "react-native";
import Quiz from "./Quiz";
import History from "./History";
import { useState } from "react";

export default AnswerScreen = () => {
  const [answeredQuiz, setAnsweredQuiz] = useState([]);

  const addAnsweredQuiz = (id, quiz, result, no) => {
    setAnsweredQuiz((prevData) => [{ id, quiz, result, no }].concat(prevData));
  };

  return (
    <View style={styles.viewContainer}>
      <Quiz answeredQuiz={answeredQuiz} addAnsweredQuiz={addAnsweredQuiz} />
      <History answeredQuiz={answeredQuiz} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  viewContainer: {
    marginTop: 20,
    flex: 1,
    alignItems: "stretch",
  },
});
