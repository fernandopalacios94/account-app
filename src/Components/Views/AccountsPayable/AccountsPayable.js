import React, { Component } from 'react';
import '../../../Styles/App.css';
import NavigationBar from '../../NavigationBar';
import NewAccount from './NewAccount';
import { HashRouter, NavLink, Route } from 'react-router-dom';

class AccountsPayable extends Component {
	render(){
		return (
		<HashRouter>
			<div>
				<div id="NavBar" className="navbar">
					<NavigationBar links={[{'text':'Inicio','url':'/','key':0},{'text':'Cuentas Por Pagar','url':'/accounts-payable','key':1}]} />
				</div>
				<div id="MainContent">
					<div className="panel">
						<div className="panel-title">
							<h1 className=" d-inline-block">CUENTAS POR PAGAR</h1>
							<NavLink to="/accounts-payable/new-account" className="button button-alpha d-inline-block"><b>AÑADIR</b></NavLink>
							<hr/>
						</div>
						<div className="panel-body">							
							<Route path="/accounts-payable/new-account" component={NewAccount}/>
						</div>
					</div>
				</div>
			</div>
		</HashRouter>
		);
	}
}

export default AccountsPayable;