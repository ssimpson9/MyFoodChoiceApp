import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Button, Text, View } from 'react-native';


class MealPlanInputScreen extends React.Component {
	constructor(props) {
		super (props);
		this.value;

		this.handleChange = this.handleChange.bind(this);
		this.handlePress = this.handlePress.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handlePress(plan) {
		//event.preventDefault();
		this.value = plan;
		alert('submission is: ' + plan);
	}

	render() {
		return(
			<View>
				<Text>Select Your Meal Plan</Text>
				<Button
					title="Gray10"
					onPress = {e=> { e.preventDefault(); this.handlePress("Gray10")} }
				/>
				<Button
					title="Scarlet14"
					onPress = {e=> { e.preventDefault(); this.handlePress("Scarlet14")} }
				/>
				<Button
					title="Unlimited"
					onPress = {e=> { e.preventDefault(); this.handlePress("Unlimited")} }
				/>
				<Button
					title="DecliningBalance"
					onPress = {e=> { e.preventDefault(); this.handlePress("DecliningBalance")} }
				/>
				<Button
					title="Carmen1"
					onPress = {e=> { e.preventDefault(); this.handlePress("Carmen1")} }
				/>
				<Button
					title="Carmen2"
					onPress = {e=> { e.preventDefault(); this.handlePress("Carmen2")} }
				/>
			</View>
		);
	}
}

export default MealPlanInputScreen;