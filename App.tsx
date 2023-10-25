import { useState } from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import ScrollviewComponent from './components/ScrollviewComponent';
import Header from './components/Header';

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  return (
    <View style={styles.container}>
      <Header setDisplayMyQR={setDisplayMyQR}/>
      { 
        displayMyQR ?
          <View style={styles.bodystails}>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={styles.avatar} source={require('./assets/SofyanAmrabat.jpg')}></Image>
                <View style={{margin: 10, backgroundColor: 'lightgray', padding: 10, borderRadius: 10, width: '70%'}}>
                  <Text style={{textAlign:'center', fontWeight: '700', fontSize: 20}}>
                  Descripción sobre mí!
                  </Text>
                  <Text>
                    Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar prácticas para mis queridos alumnos
                  </Text>
                </View>
              </View>
            <Text style= {{color: 'beriblak', fontWeight: "900", textTransform: 'capitalize', fontSize: 20, textAlign: 'center'}}>
              cosas que me gustan mucho:
            </Text>
              <ScrollviewComponent/>
            </View>
          </View>
          :
            <View style={styles.bodystails}>
              <View style={styles.qrCodeStyle}>
                <QRCode value="https://github.com/adhernea" />
              </View>
            </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodystails: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '85%'
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100
  },
  qrCodeStyle: {
    justifyContent: 'center',
    borderWidth: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
});
