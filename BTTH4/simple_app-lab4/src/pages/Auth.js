// src/pages/Auth.js
import { Login } from "./auth/Login.js";
import { Register } from "./auth/Register.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export function Auth() {
  return (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={ Login } />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
  );
}
