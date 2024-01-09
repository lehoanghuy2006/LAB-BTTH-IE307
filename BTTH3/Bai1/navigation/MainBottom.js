import React from "react";
import { View , Text} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { routes } from "./routes";
import HomeScreen from "../ui/screens/HomeScreen";
import FavoritesScreen from "../ui/screens/FavouritesScreen";
import CategoryScreen from "../ui/screens/CategoryScreen";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AccountNavigator from "./AccountNavigator";
import { colors } from "../themes/Colors";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import NotificationScreen from "../ui/screens/NotificationScreen";
import NotificationDetailsScreen from "../ui/screens/NotificationDetailsScreen";
import HomeDetailsNavigator from "./HomeDetailsNavigator";
import NotificationTab from "./NotificationTab";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();


const HomeStack = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.HOMETAB}
        component={HomeDetailsNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.CATEGORY}
        component={CategoryScreenTab}
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

// const NotificationStack = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="NotificationScreen"
//       screenOptions={{ headerShown: false }}
//     >
//       <Stack.Screen name={routes.NOTIFICATION} component={NotificationScreen} />
//       <Stack.Screen
//         name={routes.NOTIFICATIONDETAILS}
//         component={NotificationDetailsScreen}
//       />
//     </Stack.Navigator>
//   );
// };

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
        name={routes.HOMEDRAWER}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
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
function Category1Screen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Category1</Text>
    </View>
  );
}
function Category2Screen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Category2</Text>
    </View>
  );
}
function Category3Screen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Category3</Text>
    </View>
  );
}

const CategoryScreenTab = () => {
  return (
    <MaterialTopTab.Navigator>
      <MaterialTopTab.Screen name="Category1" component={Category1Screen} />
      <MaterialTopTab.Screen name="Category2" component={Category2Screen} />
      <MaterialTopTab.Screen name="Category3" component={Category3Screen} />
    </MaterialTopTab.Navigator>
  );
};



const DrawerNav = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Home" component={HomeStack}/>
      <Drawer.Screen name="Notifications" component={NotificationTab} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
