import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { routes } from "./routes";
import HomeScreen from "../ui/screens/HomeScreen"
import FavoritesScreen from "../ui/screens/FavouritesScreen";
import CategoryScreen from "../ui/screens/CategoryScreen";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AccountNavigator from "./AccountNavigator";
import {colors} from '../themes/Colors';

const Tab = createBottomTabNavigator();

const MainBottom = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      labelStyle={{ fontSize: 14 }}
      screenOptions={{ 
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarActiveTintColor: colors.BLUE,
        tabBarInactiveTintColor: colors.DARK,
      }}
      
    >
      <Tab.Screen
        name={routes.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.CATEGORY}
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="grid" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.FAVOURITES}
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="heart" size={24} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name={routes.ACCOUNTTAB}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainBottom;
