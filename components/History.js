import { StyleSheet, Text, View, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default HistoryPart = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.historyTextContainer}>
        <Text style={styles.historyText}>History</Text>
      </View>
      {props.answeredQuiz < 1 && (
        <View style={styles.noAnsContainer}>
          <Text style={styles.noAns}>You haven't answer any Quizs yet!</Text>
        </View>
      )}
      <View style={styles.historyViewContainer}>
        <FlatList
          data={props.answeredQuiz}
          renderItem={(item) => {
            return (
              <View
                style={
                  item.item.result === "right"
                    ? styles.eachHistoryR
                    : styles.eachHistoryW
                }
              >
                <View style={styles.centerQuiz}>
                  <Text
                    style={
                      item.item.result === "right"
                        ? styles.eachHistoryTextR
                        : styles.eachHistoryTextW
                    }
                  >
                    {item.item.no}.
                  </Text>
                </View>

                <View style={styles.centerQuiz}>
                  <Text
                    style={[
                      item.item.result === "right"
                        ? styles.eachHistoryTextR
                        : styles.eachHistoryTextW,
                      styles.quizNo,
                    ]}
                  >
                    {item.item.quiz}
                  </Text>
                </View>
                <Icon
                  style={styles.iconQuiz}
                  name={item.item.result === "right" ? "check" : "remove"}
                  size={25}
                  color={item.item.result === "right" ? "#4C3575" : "#F7E9D7"}
                />
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  noAnsContainer: {
    alignItems: "center",
  },
  noAns: {
    fontSize: 21,
    margin: 7,
    fontWeight: "500",
    color: "#06113C",
  },
  centerQuiz: {},
  iconQuiz: {},
  quizNo: {
    fontSize: 23,
  },
  historyTextContainer: {
    alignItems: "center",
  },
  historyText: {
    fontWeight: "600",
    fontSize: 24,
    color: "#06113C",
    borderWidth: 3,
    borderColor: "#06113C",
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginVertical: 12,
  },
  historyViewContainer: {
    alignItems: "stretch",
    flex: 1,
  },
  eachHistoryR: {
    marginHorizontal: 12,
    backgroundColor: "#F7E9D7",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eachHistoryTextR: {
    textAlign: "center",
    fontSize: 20,
    color: "#4C3575",
    fontWeight: "600",
  },
  eachHistoryW: {
    marginHorizontal: 12,
    backgroundColor: "#06113C",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eachHistoryTextW: {
    textAlign: "center",
    fontSize: 20,
    color: "#F7E9D7",
    fontWeight: "600",
  },
});
