import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import DarkModeSwitch from "./components/DarkModeSwitch";
import FeedbackInput from "./components/FeedbackInput";
import NotificationSwitch from "./components/NotificationSwitch";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [faq, setFaq] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  const submitFeedback = () => {
    if (feedback.trim() === "") {
      return; 
    }
    const formattedFeedback = `Q: ${feedback}`;

    const newFaq = [formattedFeedback, ...faq];
    setFaq(newFaq);
    setFeedback("");

    if (notifications) {
      Alert.alert("Feedback Submitted", "Thank you for your feedback!");
    }
  };
  const titleStyle = darkMode ? { color: "white" } : { color: "black" };

  return (
    <View style={darkMode ? styles.containerDark : styles.containerLight}>
      <View style={styles.logoContainer}>
        <Image source={require("./assets/logo.png")} style={styles.logo} />
        <Text style={[styles.logoTitle, titleStyle]}>React Native App</Text>
      </View>
      <DarkModeSwitch
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        titleStyle={titleStyle}
      />
      <NotificationSwitch
        notifications={notifications}
        toggleNotifications={toggleNotifications}
        titleStyle={titleStyle}
      />
      <FeedbackInput
        feedback={feedback}
        setFeedback={setFeedback}
        titleStyle={titleStyle}
      />
      <Button title="Send Feedback" onPress={submitFeedback}/>
      <TextInput style={[styles.questions, titleStyle]}>Frequently Asked Questions</TextInput>
      <ScrollView style={styles.faqContainer}>
        {faq.map((entry, index) => (
          <Text key={index} style={[styles.faqItem,titleStyle]}>
            {entry}
          </Text>
        ))}
      </ScrollView>
      <StatusBar style="dark" backgroundColor="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingLeft: 30,
    paddingRight: 30,
  },
  containerDark: {
    flex: 1,
    backgroundColor: "black",
    paddingLeft: 30,
    paddingRight: 30,
  },
  logoContainer : {
    alignItems: "center",
    justifyContent : "center",
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 50,
  },
  logoTitle: {
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    margin: 20,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
  faqContainer: {
    flex: 1,
    width: "80%",
    marginTop: 10,
  },
  faqItem: {
    padding: 5,
    marginVertical: 5,
    borderRadius: 5,
  },
  questions : {
    marginTop:20,
    fontSize: 23,
    fontWeight: 'bold',
  }

});
