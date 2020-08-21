import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { Card, Button, Text } from "@ui-kitten/components";

type FooterProps = {
  isJoined: boolean;
  canShower: boolean;
  isCheckedIn: boolean;
  navigation: any;
};

const Header = (props: any) => (
  <View {...props}>
    <Text category="h6">Shower Queue</Text>
  </View>
);

const Footer = (props: FooterProps) => {
  let button = (
    <Button style={styles.footerControl} size="small" status="basic">
      Join Queue
    </Button>
  );
  if (props.isJoined && !props.canShower) {
    button = (
      <Button style={styles.footerControl} disabled="true" size="small">
        Check In
      </Button>
    );
  }

  if (props.isJoined && props.canShower) {
    button = (
      <Button style={styles.footerControl} size="small">
        Check In
      </Button>
    );
  }

  if (props.isCheckedIn) {
    button = (
      <Button
        style={styles.footerControl}
        onPress={() => props.navigation.replace("Services")}
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
  const renderMessage = () => {
    let text = <Text>There are 5 people in front of you </Text>;

    if (isJoined && canShower) {
      text = (
        <Text>
          Please head to stall 5. Please click the Check In button in 20 minutes
        </Text>
      );
    }

    if (isCheckedIn) {
      text = <Text>Enjoy your shower! Please don't forget to Check Out</Text>;
    }

    return text;
  };

  const [isJoined, setIsJoined] = useState(true);
  const [canShower, setCanShower] = useState(true);
  const [isCheckedIn, setIsCheckedIn] = useState(true);

  return (
    <Card
      style={styles.card}
      header={Header}
      footer={() => (
        <Footer
          isJoined={true}
          canShower={true}
          isCheckedIn={true}
          navigation={navigation}
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
