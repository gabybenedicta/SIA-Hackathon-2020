import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text, Autocomplete } from '@ui-kitten/components';

type CardProps = {
	serviceName: string;
	img: string;
	description: string;
	redirect: string;
}

type HeaderProps ={
	serviceName:string;
}

type FooterProps ={
	redirect:string;
	style: any;
}

const Header = (props: HeaderProps) => (
	<View {...props}>
		<Text category='h6' style={styles.headerTitle}>{props.serviceName}</Text>
	</View>
);

const Footer = (props: FooterProps) => (
	<View {...props} style={[props.style, styles.footerContainer]}>
		<Button
			style={styles.footerControl}
			size='small'>
			View Lounge
    </Button>
	</View>
);

export default function CardItem(props: CardProps){
	return(
		<Card style={styles.card} header={()=> <Header serviceName={props.serviceName} />} footer={()=> <Footer redirect={props.redirect} />}>
		<Text>
			{props.description}
		</Text>
	</Card>
	)
}

const styles = StyleSheet.create({
	card: {
		flex: 1,
		margin: 2,
		width: "100%",
	},
	footerContainer: {
		flexDirection: 'row',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop:10,
	},
	footerControl: {
		width: "100%"
	},
	headerTitle:{
		padding: 10,
	},
	location:{
		paddingLeft: 10,
	}
});