import React, { Component } from 'react';
import Pokemon from '../src/component/pokemon/pokemon.component'
import Pokee from './component/poke/poke.component';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Pokemon />
			</div>
		);
	}
}

export default App;
