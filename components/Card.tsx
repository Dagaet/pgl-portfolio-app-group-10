import { ImageProps, ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Entypo } from '@expo/vector-icons';

type CardProps = {
  personalImage: ImageProps;
  name: string;
  iconsUrls: ImageProps[];
  info: string;
};

const Card = (props: CardProps) => {
  const { personalImage, name, iconsUrls, info } = props;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTitleContainer}>
        <Image style={styles.personalImage} source={personalImage} />
        <Text style={styles.cardTitleText}>{name}</Text>
        <Text> {info} </Text>
        <Entypo name="github" size={24} color={"black"}></Entypo>
      </View>
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
});
