import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScrollviewComponent = () => {
  return (
        <ScrollView style={{padding: 10}}>
            <Text style={styles.textStyles}>Salir a pasear</Text>
            <Text style={styles.textStyles}>Senderismo</Text>
            <Text style={styles.textStyles}>Ir a la playita</Text>
            <Text style={styles.textStyles}>Domingos de misa</Text>
            <Text style={styles.textStyles}>La guitarrita</Text>
            <Text style={styles.textStyles}>El monte con lluvia</Text>
            <Text style={styles.textStyles}>Viajar</Text>
            <Text style={styles.textStyles}>Música variadita</Text>
            <Text style={styles.textStyles}>Anime</Text>
            <Text style={styles.textStyles}>Ducharme</Text>
            <Text style={styles.textStyles}>Videojuegos</Text>
            <Text style={styles.textStyles}>Ir de cenar romántica</Text>
        </ScrollView>
  )
}

export default ScrollviewComponent

const styles = StyleSheet.create({
    textStyles: {
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'dashed',
        padding: 20,
        color: 'darkred',
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 16,
        backgroundColor: 'silver'
      }
})