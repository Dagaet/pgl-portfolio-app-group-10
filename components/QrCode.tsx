import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg'

const QrCode = () => {
  return (
    <View style={styles.qrCodeStyle}>
      <QRCode value="https://github.com/" />
    </View>
  )
}

export default QrCode

const styles = StyleSheet.create({
    
    qrCodeStyle: {
        justifyContent: "center",
        borderWidth: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
      }
})