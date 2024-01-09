import "react-native-gesture-handler";
import React from "react";
import {routes} from "./routes"
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../ui/screens/LoginScreen";
import RegistrationScreen from "../ui/screens/RegistrationScreen";


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={routes.REGISTER} component={RegistrationScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
