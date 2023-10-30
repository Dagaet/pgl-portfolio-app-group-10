import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={styles.container}>
      <Header isEnabled={isEnabled} setIsEnabled={setIsEnabled}/>
      <MainPage isEnabled={isEnabled}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  qrStyles: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
    paddingVertical: "50%",
  },
});
