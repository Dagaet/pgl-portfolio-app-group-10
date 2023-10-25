import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const PersonalDescription = () => {
  return (
    <>
      <View style={styles.mainView}>
        <Image
          style={styles.avatar}
          source={require("../assets/SofyanAmrabat.jpg")}
        ></Image>
        <View style={styles.infoView}>
          <Text style={styles.textStyle}>Descripción sobre mí!</Text>
          <Text>
            Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
            prácticas para mis queridos alumnos
          </Text>
        </View>
      </View>
      <Text style={styles.titleHobby}>cosas que me gustan mucho:</Text>
    </>
  );
};

export default PersonalDescription;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  textStyle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  infoView: {
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  titleHobby: {
    color: "black",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
});
