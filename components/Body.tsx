import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import MainPage from './MainPage'
import QRCode from 'react-native-qrcode-svg'

const Body = () => {
  return (
    <>
    <Header setDisplayMyQR={setDisplayMyQR} />
      {displayMyQR ? (
        <MainPage/>
      ) : (
        <QRCode/>    
      )}
      </>
  )
}

export default Body

const styles = StyleSheet.create({})