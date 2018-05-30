import React, { Component } from 'react';
import logo from '../logo.svg';
import '../Styles/App.css';
import '../Styles/MainMenu.css';
import { Container, Row, Col } from 'reactstrap';

import Home from './Views/Home';
import AccountsPayable from './Views/AccountsPayable/AccountsPayable';
import Providers from './Views/Providers/Providers';
import Clients from './Views/Clients/Clients';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
				<BrowserRouter>			
					<Row>
						<Col id="MenuBar" className="main-menu" md="2" sm="12" >				
							<ul id="MainMenuList">
								<li className="menu-element"><NavLink to="/">INICIO</NavLink></li>
								<li className="menu-element"><NavLink to="/accounts-payable">CUENTAS POR PAGAR</NavLink></li>
								<li className="menu-element"><a href="">CUENTAS POR COBRAR</a></li>
								<li className="menu-element"><NavLink to="/providers">PROVEEDORES</NavLink></li>
								<li className="menu-element"><NavLink to="/clients">CLIENTES</NavLink></li>
								<li className="menu-element"><a href="">USUARIOS</a></li>
								<li className="menu-element"><a href="">CONFIGURACIÓN</a></li>
							</ul>
						</Col>				
						<Col md="10" sm="12" id='Content'>
							<Route exact path="/" component={Home}/>	
							<Route path="/accounts-payable" component={AccountsPayable}/>
							<Route path="/clients" component={Clients}/>
							<Route path="/providers" component={Providers}/>
						</Col>
					</Row>
				</BrowserRouter>
		);
	}
}
export default App;