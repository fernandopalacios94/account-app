import React, { Component } from 'react';
import logo from '../logo.svg';
import '../Styles/App.css';
import '../Styles/MainMenu.css';

import Home from './Views/Home';
import AccountsPayable from './Views/AccountsPayable/AccountsPayable';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
		<BrowserRouter>			
			<div className="row">
				<div id="MenuBar" className="main-menu col-md-2 col-12">				
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
				<div className="col-md-10 col-12" id='Content'>
					<Route exact path="/" component={Home}/>	
					<Route path="/accounts-payable" component={AccountsPayable}/>
				</div>
			</div>
		</BrowserRouter>
		);
	}
}
export default App;