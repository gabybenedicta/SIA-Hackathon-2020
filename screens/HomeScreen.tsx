import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Button } from "@ui-kitten/components";

export default function HomeScreen({ navigation }) {
  return (
    <React.Fragment>
      <View style={styles.div1}></View>
      <View style={styles.div2}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("Scan")}
        >
          Enter Lounge
        </Button>
        <Image source={require("../assets/images/sq_banner.png")} />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  div1: {
    flex: 0.3,
  },
  div2: {
    flex: 0.7,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    backgroundColor: "#1D4886",
  },

  button: {
    alignSelf: "center",
    margin: 2,
    marginTop: 50,
    backgroundColor: "#FCB130",
    width: 200,
    borderColor: "#FCB130",
  },
});
