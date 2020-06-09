import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Button, Text, View } from 'react-native';


class MealPlanInputScreen extends React.Component {
	constructor(props) {
		super (props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		alert('submission is: ' + this.state.value);
	}

	render() {
		return(
			<View>
				<Text>Select Your Meal Plan</Text>
				<Button
					title="Gray10"
				/>
				<Button
					title="Scarlet14"
				/>
				<Button
					title="Unlimited"
				/>
				<Button
					title="DecliningBalance"
				/>
				<Button
					title="Carmen1"
				/>
				<Button
					title="Carmen2"
				/>
			</View>
		);
	}
}

export default MealPlanInputScreen;