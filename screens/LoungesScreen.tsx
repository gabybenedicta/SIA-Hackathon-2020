import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardItem from '../components/ui-components/CardItem';

const tempData = [
	{
		name: "Shower Stall",
		img: "",
		description:"Calm down, rest and take a shower in the lounge",
		redirect: "",
	},
	{
		name: "Food Services",
		img: "",
		description:"",
		redirect: "",
	}
]



export default function LoungesScreen() {

	const renderCards = () =>{
		return tempData.map((d,index) => (
			<CardItem key={index} serviceName={d.name} description={d.description} redirect={d.redirect} img={d.img}/>
		))
	}

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<React.Fragment>
				{renderCards()}
			</React.Fragment>
		</View>
	);
}

