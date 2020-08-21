import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardItem from '../components/ui-components/CardItem';
const tempData = [
	{
		name: "Shower Stall",
		description:"Calm down, rest and take a shower in the lounge",
		redirect: "",
	},
	{
		name: "Food Services",
		description:"Take a break and enjoy our variety of food",
		redirect: "",
	}
]

export default function ServicesScreen() {

	const renderCards = () =>{
		return tempData.map((d,index) => (
			<CardItem key={index} serviceName={d.name} description={d.description} redirect={d.redirect}/>
		))
	}

	return (
		<View style={styles.container}>
				{renderCards()}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		justifyContent: 'flex-start',
	}
});

