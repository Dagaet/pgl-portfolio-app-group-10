import { StyleSheet, View } from "react-native";
import React from "react";
import ScrollviewComponent from "./ScrollviewComponent";

const MainPage = () => {
  return (
    <View style={styles.bodystails}>
      <ScrollviewComponent />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  bodystails: {
    width: "100%",
    backgroundColor: "#FCF7FF",
    alignItems: "center",
    justifyContent: "space-between",
    height: "90%",
  },
});
