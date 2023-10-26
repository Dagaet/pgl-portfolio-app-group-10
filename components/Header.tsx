import { StyleSheet, Text, View, Pressable, Button } from 'react-native'
import React from 'react'

const Header = () => {
  return (
        <View style={styles.topContainer}>
            <Text style={styles.titleHeader}>My Portfolio App</Text>
        </View>
  )
}

export default Header
const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: "#6D7275",
        height: "15%",
        paddingTop: 75,
        width: '100%',
      },
    titleHeader: {
        color: "white",
        textAlign: 'center',
        fontWeight: 'bold',
        textAlignVertical: 'center',
        fontSize: 30,
      }
})