import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
function FeedbackInput({ feedback, setFeedback,titleStyle }) {
  const isDarkMode = titleStyle.color === "white";
  return (
    <View style={styles.inputContainer}>
      <TextInput style={[styles.feedbackTitle,titleStyle]}>Feedback</TextInput>
      <TextInput
        placeholder="Enter your feedback..."
        placeholderTextColor={isDarkMode ? "white" : "gray"}
        multiline={true}
        numberOfLines={4}
        value={feedback}
        onChangeText={setFeedback}
        style={[
          styles.input,
          titleStyle,
          {
            borderColor: "#D9D9D9",
            borderWidth: 2,
            backgroundColor: isDarkMode ? "gray" : "white",
          },
        ]}
      />
      
    </View>
  );
}
export default FeedbackInput;
const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  feedbackTitle : {
    fontSize:25,
    marginBottom: 10,
  },
});
