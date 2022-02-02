import React, { Component } from 'react';
import './App.css';
import VoteBox from './components/VoteBox';

class Voting extends Component {


	constructor(props) {
		super(props);

	}


	render() {
		const languageList = [
			"Javascript", "Python", "Go", "Java", "TypeScript", "Ruby", "Elixir"
		]
		return (
			<div>
				<h1>Vote for a language</h1>
				<div>{languageList.map((language) => <VoteBox name={language} />)}</div>
			</div>
		);
	}
}
export default Voting;