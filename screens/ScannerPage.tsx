import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
import { CommonActions } from "@react-navigation/native";
import { NavigationActions } from "@react-navigation/native";

export default function ScannerPage({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      //@ts-ignore
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }: any) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    const response = await axios.post(
      "https://loungewie.herokuapp.com/process_barcode/1",
      {
        barcodeValue: data,
      }
    );
    navigation.popToTop();
    navigation.replace(response.data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        //@ts-ignore
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      <View style={styles.safeArea}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  safeArea: {
    padding: 40,
  },
});
