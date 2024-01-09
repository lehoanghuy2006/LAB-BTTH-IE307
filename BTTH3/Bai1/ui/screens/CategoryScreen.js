import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CategoryScreen</Text>
    </View>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
    marginTop: 30,
  },
});
