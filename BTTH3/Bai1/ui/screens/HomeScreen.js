import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {routes} from '../../navigation/routes'

const HomeScreen = ({navigation}) => {
  const onClickNavigateDetails = () => {
    navigation.navigate(routes.HOMEDETAIL);
  };
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
            title="Go to details"
            onPress={onClickNavigateDetails}
            color="#00A86B"
          />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
