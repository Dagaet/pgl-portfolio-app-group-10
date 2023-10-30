import {
  StyleSheet,
  Modal,
  Text,
  View,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import QrCode from "./QrCode";

type ModalProps = {
  iconsUrls: string[];
  qrURL: string;
};

const ModalComponent = (props: ModalProps) => {
  const { iconsUrls, qrURL } = props;
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
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

  return (
    <>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={openModal1}
        >
          <Text style={[styles.textStyle, styles.buttonText]}>Qr Github</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={openModal2}
        >
          <Text style={[styles.textStyle, styles.buttonText]}>
            Social Media
          </Text>
        </Pressable>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible1}
        onRequestClose={closeModal1}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.qr}>
              <QrCode qrURL={qrURL}/>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={closeModal1}
            >
              <Text style={[styles.textStyle, styles.buttonText]}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible2}
        onRequestClose={closeModal2}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.socialIconsContainer}>
              {iconsUrls.map((iconsUrls, key) => (
                <Text style={styles.infoSocial} key={key}>{iconsUrls}</Text>
              ))}
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={closeModal2}
            >
              <Text style={[styles.textStyle, styles.buttonText]}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 40,
    padding: 10,
    elevation: 3,
    margin: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonOpen: {
    backgroundColor: "blue",
  },
  buttonClose: {
    backgroundColor: "blue",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
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
  qr: {
    bottom: 10,
  },
  socialIconsContainer: {
    flexDirection: "column",
  },
  iconImage: {
    bottom: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  infoSocial: {
    height: 30
  }
});
