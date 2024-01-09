import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import {routes} from '../../navigation/routes'
const AccountScreen = ({navigation}) => {
  const onClickNavigateProfile = () => {
    navigation.navigate(routes.PROFILE);
  };
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 , fontWeight: 'bold'}}>Account Screen</Text>
      <Button title="LOG OUT" onPress={handleLogout} />

      <View style={{ paddingTop: 20 }}>
          <Button
            title="Done"
            onPress={onClickNavigateProfile}
            color="#00A86B"
          />
        </View>

    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingTop: 20, // Make sure other styles do not interfere
    // You may also set other styles like width and height
    width: 200, // Adjust as needed
    height: 40,  // Adjust as needed
  }
});
