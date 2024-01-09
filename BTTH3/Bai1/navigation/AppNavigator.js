import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import MainBottom from "./MainBottom";
import AuthStack from "./AuthStack";
import DrawerNav from "./MainBottom";


const AppNavigator = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
        {user ? <DrawerNav /> : <AuthStack />}
    </NavigationContainer>
 
  );
};

export default AppNavigator;
