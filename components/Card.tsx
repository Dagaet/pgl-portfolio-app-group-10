import { ImageProps, StyleSheet, Text, View, Image, Modal, Pressable, TouchableOpacity, Linking } from "react-native";
import React, { useState } from "react";
import QRCode from "react-native-qrcode-svg";

type CardProps = {
  personalImage: ImageProps;
  name: string;
  iconsUrls: ImageProps[];
  info: string;
};

const Card = (props: CardProps) => {
  const { personalImage, name, iconsUrls, info,} = props;
  const  [isModalVisible1, setModalVisible1] = useState(false);
  const  [isModalVisible2, setModalVisible2] = useState(false);
  
  const openModal1 = () => {
    setModalVisible1(true);
  };
  const openModal2 = () => {
    setModalVisible2(true);
  };
  const closeModal1 = () => {
    setModalVisible1(false);
  };
  const closeModal2 = () => {
    setModalVisible2(false);
  };
  const openLink = (url: string) => {
    Linking.openURL(url);
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTitleContainer}>
        <Image style={styles.personalImage} source={personalImage} />
        <Text style={styles.cardTitleText}>{name}</Text>
        <Text> {info} </Text>
          <View style={styles.buttonContainer}>
            <Pressable    
              style={[styles.button, styles.buttonOpen]}
              onPress={openModal1}>
              <Text style={[styles.textStyle, styles.buttonText]}> Qr Github</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonDefault, styles.buttonClose]}
              onPress={openModal2}>
              <Text style={[styles.textStyle, styles.buttonText]}>Social Media</Text>
            </Pressable> 
          </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible1}
        onRequestClose={closeModal1}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.qr}>
              <QRCode/>
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={closeModal1}>
                <Text style={[styles.textStyle, styles.buttonText]}>Cerrar</Text>
              </Pressable>
            </View>
          </View>
      </Modal>
       <Modal
         animationType="fade"
         transparent={true}
         visible={isModalVisible2}
         onRequestClose={closeModal2}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <View style={styles.socialIconsContainer}>
              <TouchableOpacity onPress={() => openLink('https://www.instagram.com/')}>
                <Image style={styles.iconImage} source={require("../assets/logoInsta.png")}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openLink('https://twitter.com/home?lang=es')}>
                <Image style={styles.iconImage} source={require("../assets/logoTwitter.png")}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/feed/')}>
                <Image style={styles.iconImage} source={require("../assets/logolinkeding.png")}/>
              </TouchableOpacity>
            </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={closeModal2}>
                <Text style={[styles.textStyle, styles.buttonText]}>Cerrar</Text>
              </Pressable>
            </View>
          </View>
      </Modal>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: "90%",
    height: "90%",
    flexDirection: "row", 
    justifyContent: "center",
    alignItems: "center",
    padding: 80,
    backgroundColor: "#D7D0C8",
    borderRadius: 40,
    marginVertical: 30,
    marginHorizontal: 15,
    borderWidth: 1,


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 25,
  },

  personalImage: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  cardTitleContainer: {
    height: 300,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  cardTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 50
  },
  cardBodyText: {
    height: 120,
    margin: 10,
  },


  buttonContainer:{
    flexDirection:"row"
  },


  button:{
    borderRadius: 20,
    padding:10,
    elevation:2
  },
    buttonOpen: {
      backgroundColor: "#F194FF"
  },

  textStyle:{
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },


  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonDefault: {
    backgroundColor: "#ccc",
    borderColor: "#999"
  },
  buttonClose: {
    backgroundColor:"#F194FF"
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    marginTop: 22
  },
  socialIconsContainer:{
    flexDirection: "row"
  },
  iconImage:{
    bottom:10,
    width: 50, 
    height: 50, 
    borderRadius: 50
  },

  qr:{
    bottom: 10
  }

});
