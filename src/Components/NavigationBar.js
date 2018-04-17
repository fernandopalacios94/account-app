import React, { Component } from 'react';
import '../Styles/NavigationBar.css';

class NavigationBar extends Component {
	render() {
		return (
			<ul>
				<li className="menu-element"><a href="">INICIO</a></li>
				<li className="menu-element"><a href="">CUENTAS POR PAGAR</a></li>
			</ul>
		);
	}
}
export default NavigationBar;