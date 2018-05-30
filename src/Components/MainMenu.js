import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter, NavLink } from 'react-router-dom';
import '../Styles/MainMenu.css';


class MainMenu extends Component {
	render() {
		return (		
				<ul id="MainMenuList">
					<li className="menu-element"><NavLink to="/">INICIO</NavLink></li>
					<li className="menu-element"><NavLink to="/accounts-payable">CUENTAS POR PAGAR</NavLink></li>
					<li className="menu-element"><a href="">CUENTAS POR COBRAR</a></li>
					<li className="menu-element"><NavLink to="/providers">PROVEEDORES</NavLink></li>
					<li className="menu-element"><a href="">CLIENTES</a></li>
					<li className="menu-element"><a href="">USUARIOS</a></li>
					<li className="menu-element"><a href="">CONFIGURACIÓN</a></li>
				</ul>		
		);
	}
}
export default MainMenu;