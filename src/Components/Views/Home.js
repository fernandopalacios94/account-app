import React, { Component } from 'react';
import '../../Styles/App.css';
import NavigationBar from '../NavigationBar';

class Home extends Component {
	render(){
		return (
		<div>
			<div id="NavBar" className="navbar">
				<NavigationBar links={[{'text':'Inicio','url':'/','key':0}]} />
			</div>
			<div id="MainContent">
				<h1>INICIO</h1>
			</div>
		</div>
		);
	}
}

export default Home;