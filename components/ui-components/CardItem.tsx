import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Card, Text, Autocomplete } from '@ui-kitten/components';

type CardProps = {
	serviceName: string;
	description: string;
	redirect: string;
}

type HeaderProps ={
	serviceName:string;
}

type FooterProps ={
	redirect:string;
}

const Header = (props: HeaderProps) => (
	<View {...props}>
		<Text category='h6' style={styles.headerTitle}>{props.serviceName}</Text>
	</View>
);

const Footer = (props: FooterProps) => (
	<View {...props} style={[styles.footerContainer]}>
		<Button
			style={styles.footerControl}
			size='small'>
			View Details
    </Button>
	</View>
);

export default function CardItem(props: CardProps){
	return(
		<React.Fragment>
		<Card style={styles.card} header={()=> <Header serviceName={props.serviceName} />} footer={()=> <Footer redirect={props.redirect} />}>
		<Text>
			{props.description}
		</Text>
	</Card>
	</React.Fragment>
	)
}

const styles = StyleSheet.create({
	card: {
		margin: 2,
		width: "100%",
	},
	footerContainer: {
		flexDirection: 'row',
		padding: 10,
	},
	footerControl: {
		width: "100%"
	},
	headerTitle:{
		padding: 10,
	},
	location:{
		paddingLeft: 10,
	},
});