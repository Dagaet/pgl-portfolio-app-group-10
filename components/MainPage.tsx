import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PersonalDescription from './PersonalDescription'
import ScrollviewComponent from './ScrollviewComponent'

const MainPage = () => {
  return (
    <View style={styles.bodystails}>
        <View>
            <PersonalDescription />
            <ScrollviewComponent />
        </View>
    </View>
    
  )
}

export default MainPage

const styles = StyleSheet.create({
    bodystails: {
        width: "100%",
        borderWidth: 2,
        borderColor: "black",
        alignItems: "center",
        justifyContent: "space-between",
        height: "85%",
      }
})