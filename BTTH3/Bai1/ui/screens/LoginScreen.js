import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useAuth } from "../../context/AuthContext";
import { routes } from "../../navigation/routes";
import { colors } from "../../themes/Colors";
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import SocialMediaCard from "../components/SocialMediaCard";
import { units } from "../../themes/Units";

const LoginScreen = ({ navigation }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.DARKGRAY} />

      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.logoTitle}>Welcome</Text>
      </View>
      <View style={styles.inputContainer}>
        <Fontisto name="email" size={24} color="black" />

        <TextInput
          style={styles.inputs}
          placeholder="Email"
          onChangeText={setEmail}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.inputContainer}>
        <SimpleLineIcons name="lock" size={24} color="black" />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.btnForgotPassword}>
        <Text style={styles.btnText}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={handleLogin}
      >
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.moreLogin}>Or login with</Text>
      <View>
        <SocialMediaCard />
      </View>

      <View style={styles.signUpContainer}>
        <Text style={{fontSize: 18}}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate(routes.REGISTER)} >
          <Text style={{ color: colors.SECONDARY, fontSize:18,fontWeight:'bold' }}>Sign up here!</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.GRAY,
  },
  logoContainer: {
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 50,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: units.height / 25,
  },
  logoTitle: {
    fontWeight: "bold",
    fontSize:25,
    marginTop: 15,
    marginBottom: 15,
  },
  inputContainer: {
    paddingLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    width: 320,
    height: 57,
    marginBottom: 20,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    // justifyContent: "center",
  },
  btnText: {
    color: colors.PINK,
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: 18,
  },
  btnForgotPassword: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    // marginVertical: 10,
    top: -15,
    width: 300,

    // backgroundColor: 'transparent'
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    borderRadius: 10,
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: colors.PRIMARY,
  },
  loginText: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 20,
  },
  moreLogin: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
