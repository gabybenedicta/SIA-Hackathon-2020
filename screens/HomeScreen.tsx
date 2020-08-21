import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Avatar, Button, Icon, Layout, Spinner } from "@ui-kitten/components";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image source={require("../assets/images/sq_banner.png")} />
      <Button style={styles.button}>Enter Lounge</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 2,
  },
});
