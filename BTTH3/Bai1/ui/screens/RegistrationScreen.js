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
import { FontAwesome5 } from '@expo/vector-icons'; 


import SocialMediaCard from "../components/SocialMediaCard";
import { units } from "../../themes/Units";

const RegistrationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={colors.DARKGRAY} />

    <View style={styles.logoContainer}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.logoTitle}>Create New Account</Text>
    </View>
    <View style={styles.inputContainer}>
    <FontAwesome5 name="user" size={24} color="black" />

      <TextInput
        style={styles.inputs}
        placeholder="Enter username"

        underlineColorAndroid="transparent"
      />
    </View>
    <View style={styles.inputContainer}>
      <Fontisto name="email" size={24} color="black" />

      <TextInput
        style={styles.inputs}
        placeholder="Enter email"

        underlineColorAndroid="transparent"
      />
    </View>
    <View style={styles.inputContainer}>
      <SimpleLineIcons name="lock" size={24} color="black" />
      <TextInput
        style={styles.inputs}
        placeholder="Enter password"
        secureTextEntry
      />
    </View>
    <View style={styles.inputContainer}>
      <SimpleLineIcons name="lock" size={24} color="black" />
      <TextInput
        style={styles.inputs}
        placeholder="Confirm password"
        secureTextEntry
      />
    </View>
    <TouchableOpacity
      style={[styles.buttonContainer, styles.loginButton]}
    >
      <Text style={styles.loginText}>Create</Text>
    </TouchableOpacity>
   

    <View style={styles.signUpContainer}>
      <Text style={{fontSize: 18}}>Already have an account </Text>
      <TouchableOpacity onPress={() => navigation.navigate(routes.LOGIN)} >
        <Text style={{ color: colors.SECONDARY, fontSize:18,fontWeight:'bold' }}>Login now!</Text>
      </TouchableOpacity>
    </View>

  </View>
  )
}

export default RegistrationScreen

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
  },
  logoTitle: {
    fontWeight: "bold",
    fontSize: 25,
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
