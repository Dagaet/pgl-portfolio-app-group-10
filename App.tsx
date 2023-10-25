import { useState } from "react";
import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import ScrollviewComponent from "./components/ScrollviewComponent";
import Header from "./components/Header";
import PersonalDescription from "./components/PersonalDescription";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  return (
    <View style={styles.container}>
      <Header setDisplayMyQR={setDisplayMyQR} />
      {displayMyQR ? (
        <View style={styles.bodystails}>
          <View>
            <PersonalDescription />
            <ScrollviewComponent />
          </View>
        </View>
      ) : (
        <View style={styles.bodystails}>
          <View style={styles.qrCodeStyle}>
            <QRCode value="https://github.com/adhernea" />
          </View>
        </View>
      )}
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
  bodystails: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  qrCodeStyle: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
