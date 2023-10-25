import { StyleSheet, Text, View, Pressable, Button } from 'react-native'
import React from 'react'

type HeaderProps = {
    setDisplayMyQR: Function
}

const Header = (props: HeaderProps) => {
    const {setDisplayMyQR} = props
  return (
        <View style={styles.topContainer}>
            <Text style={styles.titleHeader}>My Portfolio App</Text>
            <View style={styles.navbarContainer}>
              <Pressable style={styles.buttonruta} onPress={() => setDisplayMyQR(true)}>
                <Text style={styles.shadoxboxing}>Mi info</Text>
              </Pressable>
              <Pressable style={styles.buttonruta} onPress={() => setDisplayMyQR(false)}>
                <Text style = {styles.shadoxboxing}>Mi repo</Text>
              </Pressable>
            </View>
        </View>
  )
}

export default Header

const styles = StyleSheet.create({
    topContainer: {
        height: '15%',
        paddingTop: 50,
        width: '100%',
      },
    titleHeader: {
        backgroundColor: 'gray',
        textAlign: 'center',
        fontWeight: 'bold',
        textAlignVertical: 'center',
        fontSize: 30,
      },
      navbarContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'darkgray',
        alignItems: 'center',
        justifyContent: "space-between"
      },
      buttonruta: {
        width:'50%',
      },
      shadoxboxing: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        color: 'white',
        fontWeight: 'bold', 
        textTransform: 'uppercase',
        textAlign: "center",
        textAlignVertical: "center"
      }
})