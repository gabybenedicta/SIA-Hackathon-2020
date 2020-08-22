import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Button, Text } from "@ui-kitten/components";

import axios from "axios";

type FooterProps = {
  isJoined: boolean;
  canShower: boolean;
  isInShower: boolean;
  queueLength: null|number;
  stallEnter: null|number;
  navigation: any;
  setIsJoined: (isJoined: boolean) => void;
  setCanShower: (canShower: boolean) => void;
  setisInShower: (isInShower: boolean) => void;
  setQueueLength:(queueLength: null|number) => void;
  setStallEnter:(stallEnter: null|number)=> void;
};

const Header = (props: any) => (
  <View {...props}>
    <Text category="h6">Shower Queue</Text>
  </View>
);

const Footer = (props: FooterProps) => {
  const joinShowerQueue = async() =>{
    const response = await axios.post("https://loungewie.herokuapp.com/join_shower_queue/1", {
      lounge_id: 1
    });

    props.setCanShower(response.data.canShower);
    props.setisInShower(response.data.isInShower);
    props.setIsJoined(response.data.isJoined);
    props.setQueueLength(response.data.queueLength);
    props.setStallEnter(response.data.stallEnter);
  }

  const checkInShower = async() =>{
    const response = await axios.post("https://loungewie.herokuapp.com/check_in_to_shower/1");
    props.setCanShower(response.data.canShower);
    props.setisInShower(response.data.isInShower);
    props.setIsJoined(response.data.isJoined);
    props.setQueueLength(response.data.queueLength);
    props.setStallEnter(response.data.stallEnter);
  }

  const checkOutShower = async() =>{
    const response = await axios.post("https://loungewie.herokuapp.com/check_out_shower/1");
    props.setCanShower(response.data.canShower);
    props.setisInShower(response.data.isInShower);
    props.setIsJoined(response.data.isJoined);
    props.setQueueLength(response.data.queueLength);
    props.setStallEnter(response.data.stallEnter);
    props.navigation.replace("Services");
  }

  let button = (
    <Button style={styles.footerControl} size="small" status="basic" onPress={joinShowerQueue}>
      Join Queue
    </Button>
  );
  if (props.isJoined) {
    button = (
      <Button style={styles.footerControl} disabled="true" size="small">
        Please Wait for your turn
      </Button>
    );
  }

  if (props.canShower) {
    button = (
      <Button style={styles.footerControl} size="small" onPress={checkInShower}>
        Check In
      </Button>
    );
  }

  if (props.isInShower) {
    button = (
      <Button
        style={styles.footerControl}
        onPress={checkOutShower}
        size="small"
      >
        Check Out
      </Button>
    );
  }

  return (
    <View {...props} style={[styles.footerContainer]}>
      {button}
    </View>
  );
};

export default function ShowerScreen({ navigation }: any) {
  const [timeToggle, setTimeToggle] = useState(false);
  const [isJoined, setIsJoined] = useState(true);
  const [canShower, setCanShower] = useState(true);
  const [isInShower, setisInShower] = useState(true);
  const [queueLength, setQueueLength] = useState<number|null>(null);
  const [stallEnter, setStallEnter] = useState<number|null>(null)

  useEffect(()=>{
    const timer = setTimeout(() => {
      setTimeToggle(!timeToggle)
    }, 100000);
    
    async function apiRequest(){
      const response = await axios.get("https://loungewie.herokuapp.com/get_queue_status/1");
      setIsJoined(response.data.isJoined);
      setCanShower(response.data.canShower);
      setisInShower(response.data.isInShower);
      setQueueLength(response.data.queueLength);
      setStallEnter(response.data.stallEnter);
    }

    apiRequest();
    return () => clearTimeout(timer);
  },[timeToggle])

  const handleIsJoined = (isJoined: boolean) =>{
    setIsJoined(isJoined);
  }

  const handleCanShower = (canShower: boolean) =>{
    setCanShower(canShower);
  }

  const handleisInShower = (isInShower: boolean) =>{
    setisInShower(isInShower);
  }

  const handleQueueLength = (queueLength: number| null) =>{
    setQueueLength(queueLength);
  }

  const handleStallEnter = (stallEnter: number|null) =>{
    setStallEnter(stallEnter);
  }

  const renderMessage = () => {
    let text = <Text>There are <Text>{queueLength?.toString()}</Text> people in front of you </Text>;

    if (canShower) {
      text = (
        <Text>
          Please head to stall <Text>{stallEnter?.toString()}</Text>. Please click the Check In button in 20 minutes
        </Text>
      );
    }

    if (isInShower) {
      text = <Text>Enjoy your shower! Please don't forget to Check Out</Text>;
    }

    return text;
  };

  return (
    <Card
      style={styles.card}
      header={Header}
      footer={() => (
        <Footer
          isJoined={isJoined}
          canShower={canShower}
          isInShower={isInShower}
          navigation={navigation}
          queueLength={queueLength}
          stallEnter={stallEnter}
          setIsJoined={handleIsJoined}
          setCanShower={handleCanShower}
          setisInShower={handleisInShower}
          setQueueLength={handleQueueLength}
          setStallEnter={handleStallEnter}
        />
      )}
    >
      {renderMessage()}
    </Card>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: 20,
  },
  footerControl: {
    width: "100%",
  },
});
