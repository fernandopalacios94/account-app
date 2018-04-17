import React, { Component } from 'react';
import logo from '../logo.svg';
import '../Styles/App.css';
import {Router, Route} from 'react-router';

import MainMenu from './MainMenu';
import NavigationBar from './NavigationBar'

class App extends Component {
	render() {
		return (
			<div className="main-container">
				<div id="MenuBar" className="main-menu d-inline-block">
					<MainMenu />
				</div>
				<div className="content d-inline-block">
					<div id="NavBar" className="navbar">
						<NavigationBar />
					</div>
				</div>
			</div>
		);
	}
}
export default App;