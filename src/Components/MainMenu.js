import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import AccountsPayable from './Views/AccountsPayable/AccountsPayable';
import { BrowserRouter, HashRouter, NavLink } from 'react-router-dom';
import '../Styles/MainMenu.css';


class MainMenu extends Component {
	render() {
		return (		
				<ul id="MainMenuList">
					<li className="menu-element"><NavLink to="/">INICIO</NavLink></li>
					<li className="menu-element"><NavLink to="/accounts-payable">CUENTAS POR PAGAR</NavLink></li>
					<li className="menu-element"><a href="">CUENTAS POR COBRAR</a></li>
					<li className="menu-element"><a href="">PROVEEDORES</a></li>
					<li className="menu-element"><a href="">CLIENTES</a></li>
					<li className="menu-element"><a href="">USUARIOS</a></li>
					<li className="menu-element"><a href="">CONFIGURACIÓN</a></li>
				</ul>		
		);
	}
}
export default MainMenu;