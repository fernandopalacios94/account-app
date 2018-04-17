import React, { Component } from 'react';
import '../Styles/MainMenu.css';

class MainMenu extends Component {
	render() {
		return (
			<ul>
				<li className="menu-element"><a href="">INICIO</a></li>
				<li className="menu-element"><a href="">CUENTAS POR PAGAR</a></li>
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