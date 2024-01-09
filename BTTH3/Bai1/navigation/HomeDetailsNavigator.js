import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import {routes} from './routes';
import HomeScreen from '../ui/screens/HomeScreen';
import HomeDetailsScreen from '../ui/screens/HomeDetailsScreen';
import { Entypo } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';
const Stack = createStackNavigator();

const HomeDetailsNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.HOME} component={HomeScreen} 
      options={{headerLeft:()=> (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Entypo style={{padding: 10}} name="menu" size={24} color="black" />
        </TouchableOpacity>
      )}} 
      />
      <Stack.Screen name={routes.HOMEDETAIL} component={HomeDetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeDetailsNavigator;
