// src/pages/main/Profile/index.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from './Profile.js';
import { EditProfile } from './EditProfile.js';

const Stack = createNativeStackNavigator();

export default function ProfileStack({navigation}){
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            screenListeners={{
                state: (e) => {
                    console.log(e.data.state.index)
                    if (e.data.state.index == 1){
                        navigation.setOptions({
                            headerShown: false
                        })
                    }

                },
            }}
        >
            <Stack.Screen name="ProfileInfo" component={Profile}/>
            <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
    )
}