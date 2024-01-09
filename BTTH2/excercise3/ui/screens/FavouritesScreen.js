import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const FavoritesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>FavoritesScreen</Text>
      
    </View>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
