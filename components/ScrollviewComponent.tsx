import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { peopleData, PersonalData } from '../data/InformationData'

const ScrollviewComponent = () => {

  return (
        <ScrollView style={styles.scrollViewStyle}>
            {
              peopleData.map((info: PersonalData, index: number) => 
                <Text key={index} style={styles.textStyles}>{info.data}</Text>)
            }
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
      },
    scrollViewStyle: {
        padding: 10
    }
})