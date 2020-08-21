import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "@ui-kitten/components";

type CardProps = {
  serviceName: string;
  description: string;
  redirect: string;
  navigation: any;
};

type HeaderProps = {
  serviceName: string;
};

type FooterProps = {
  redirect: string;
  navigation: any;
};

const Header = (props: HeaderProps) => (
  <View {...props}>
    <Text category="h6" style={styles.headerTitle}>
      {props.serviceName}
    </Text>
  </View>
);

const Footer = (props: FooterProps) => (
  <View {...props} style={[styles.footerContainer]}>
    <Button
      style={styles.footerControl}
      onPress={() => props.navigation.navigate(props.redirect)}
      size="small"
    >
      View Details
    </Button>
  </View>
);

export default function CardItem(props: CardProps) {
  return (
    <React.Fragment>
      <Card
        style={styles.card}
        header={() => <Header serviceName={props.serviceName} />}
        footer={() => (
          <Footer redirect={props.redirect} navigation={props.navigation} />
        )}
      >
        <Text>{props.description}</Text>
      </Card>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 2,
    width: "100%",
  },
  footerContainer: {
    flexDirection: "row",
    padding: 10,
  },
  footerControl: {
    width: "100%",
  },
  headerTitle: {
    padding: 10,
  },
  location: {
    paddingLeft: 10,
  },
});
