import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
function DarkModeSwitch({ darkMode, toggleDarkMode, titleStyle}) {
  return (
    <View style={styles.switchContainer}>
      <Text style={titleStyle}>Dark Mode</Text>
      <Switch value={darkMode} onValueChange={toggleDarkMode} />
    </View>
  );
}

export default DarkModeSwitch;
const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingLeft: 5,
   
  },
});
