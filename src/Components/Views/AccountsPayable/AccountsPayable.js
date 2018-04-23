import React, { Component } from 'react';
import '../../../Styles/App.css';
import NavigationBar from '../../NavigationBar';
import NewAccount from './NewAccount';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

class AccountsPayable extends Component {
	render(){
		return (
		<BrowserRouter>
			<div class="row">
				<nav aria-label="breadcrumb" id="NavBar">
					<NavigationBar links={[{'text':'Inicio','url':'/','key':0},{'text':'Cuentas Por Pagar','url':'/accounts-payable','key':1}]} />
				</nav>				
				<div className="col-12">
					<h1 class="d-inline-block">CUENTAS POR PAGAR</h1>					
					<NavLink class="d-inline-block btn btn-info" to="/accounts-payable/new-account" className="button button-alpha d-inline-block"><b>AÑADIR</b></NavLink>
					<hr/>
				</div>
				<div className="panel">
					<div className="panel-title">
					</div>
					<div className="panel-body">							
						<Route path="/accounts-payable/new-account" component={NewAccount}/>
					</div>
				</div>
			</div>
		</BrowserRouter>
		);
	}
}

export default AccountsPayable;