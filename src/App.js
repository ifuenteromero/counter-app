import React, { Component, Fragment } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('App-Constructor');

		this.state = {
			counters: [
				{ id: 1, value: 0 },
				{ id: 2, value: 0 },
				{ id: 3, value: 0 },
				{ id: 4, value: 0 },
			],
		};
	}

	componentDidMount() {
		console.log('App-Mounted');
	}

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			return { ...c, value: 0 };
		});
		this.setState({ counters });
	};

	handleDelete = counterId => {
		const counters = this.state.counters.filter(
			counter => counter.id !== counterId
		);
		this.setState({ counters });
	};

	handleIncrement = (counter, quantity) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		console.log(counters[index]);
		counters[index].value = counters[index].value + quantity;
		console.log(counters[index]);
		this.setState({ counters });
	};

	render() {
		console.log('App-Rendered');

		return (
			<Fragment>
				<NavBar
					totalCounters={this.state.counters.filter(c => c.value).length}
				/>
				<main className="container">
					<Counters
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDelete={this.handleDelete}
						counters={this.state.counters}
					/>
				</main>
			</Fragment>
		);
	}
}

export default App;
