import React from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
} from "react-native";
function NotificationSwitch({ notifications, toggleNotifications, titleStyle }) {
  return (
    <View style={styles.switchContainer}>
      <Text style={titleStyle}>Notifications</Text>
      <Switch value={notifications} onValueChange={toggleNotifications} />
    </View>
  );
}
export default NotificationSwitch;
const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingLeft: 5,
  },
});
