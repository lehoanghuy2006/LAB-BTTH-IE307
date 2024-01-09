import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import {routes} from './routes';
import { Entypo } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';
import NotificationScreen from '../ui/screens/NotificationScreen';
import NotificationDetailsScreen from '../ui/screens/NotificationDetailsScreen';

const Stack = createStackNavigator();

const NotificationTab = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.NOTIFICATION} component={NotificationScreen} 
      options={{headerLeft:()=> (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Entypo style={{padding: 10}} name="menu" size={24} color="black" />
        </TouchableOpacity>
      )}} 
    />
      <Stack.Screen name={routes.NOTIFICATIONDETAILS} component={NotificationDetailsScreen} />
    </Stack.Navigator>
  );
};

export default NotificationTab;
