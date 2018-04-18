import React, { Component } from 'react';
import logo from '../logo.svg';
import '../Styles/App.css';

import MainMenu from './MainMenu';
import { render } from 'react-dom';
import Home from './Views/Home';
import AccountsPayable from './Views/AccountsPayable/AccountsPayable';
import { BrowserRouter, HashRouter, NavLink, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
		<HashRouter>			
			<div className="main-container">
				<div id="MenuBar" className="main-menu d-inline-block">				
					<ul id="MainMenuList">
						<li className="menu-element"><NavLink to="/">INICIO</NavLink></li>
						<li className="menu-element"><NavLink to="/accounts-payable">CUENTAS POR PAGAR</NavLink></li>
						<li className="menu-element"><a href="">CUENTAS POR COBRAR</a></li>
						<li className="menu-element"><a href="">PROVEEDORES</a></li>
						<li className="menu-element"><a href="">CLIENTES</a></li>
						<li className="menu-element"><a href="">USUARIOS</a></li>
						<li className="menu-element"><a href="">CONFIGURACIÓN</a></li>
					</ul>
				</div>				
				<div className="content d-inline-block" id='Content'>
					<Route exact path="/" component={Home}/>	
					<Route path="/accounts-payable" component={AccountsPayable}/>
				</div>
			</div>
		</HashRouter>
		);
	}
}
export default App;