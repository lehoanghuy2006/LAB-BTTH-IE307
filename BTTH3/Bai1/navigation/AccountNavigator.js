import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import {routes} from './routes';
import AccountScreen from '../ui/screens/AccountScreen';
import ProfileScreen from '../ui/screens/ProfileScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} options={{headerShown: false}} />
      <Stack.Screen name={routes.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
