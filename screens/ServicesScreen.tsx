import React from "react";
import { StyleSheet, View } from "react-native";
import CardItem from "../components/ui-components/CardItem";
import { Button } from "@ui-kitten/components";

import axios from "axios";

const tempData = [
  {
    name: "Shower Stall",
    description: "Calm down, rest and take a shower in the lounge",
    redirect: "Scan",
  },
  {
    name: "Food Services",
    description: "Take a break and enjoy our variety of food",
    redirect: "Services",
  },
];

export default function ServicesScreen({ navigation }: any) {
	const handleExitLounge = async () =>{
		const response = await axios.post("https://loungewie.herokuapp.com/check_out_lounge/1");
		navigation.replace("Home")
	}
  const renderCards = () => {
    return tempData.map((d, index) => (
      <CardItem
        key={index}
        serviceName={d.name}
        description={d.description}
        redirect={d.redirect}
        navigation={navigation}
      />
    ));
  };

  return (
    <View style={styles.container}>
      {renderCards()}
      <View style={styles.buttonContainer}>
        <Button onPress={handleExitLounge}>Exit Lounge</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 100,
    flexDirection: "column",
    padding: 10,
    width: "100%",
  },
});
