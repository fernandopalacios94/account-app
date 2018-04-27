import React, { Component } from 'react';
import '../../../Styles/App.css';
import NavigationBar from '../../NavigationBar';
import NewAccount from './NewAccount';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

var GLOBAL_URL = "../../../Controllers";

class AccountsPayable extends Component {
	render(){
		return (
		<BrowserRouter>
			<div>
				<div className="row">
					<nav aria-label="breadcrumb" id="NavBar">
						<NavigationBar links={[{'text':'Inicio','url':'/','key':0},{'text':'Cuentas Por Pagar','url':'/accounts-payable','key':1}]} />
					</nav>				
					<div className="col-sm-12">
						<h1 className="d-inline-block"><b>CUENTAS POR PAGAR</b></h1>					
						<NavLink className="d-inline-block btn btn-info btn-title" to="/accounts-payable/new-account"><b>AÑADIR</b></NavLink>
						<hr className="my-sm-1" />
					</div>
				</div>
				<Route path="/accounts-payable/new-account" component={NewAccount}/>				
			</div>
		</BrowserRouter>
		);
	}
	componentDidMount() {
		fetch('http://localhost.aquablock/account-app/').then((response) => {
			return response.json();
		}).then((data) => {
        	console.log(data.msg);
      	});
	}
}

export default AccountsPayable;