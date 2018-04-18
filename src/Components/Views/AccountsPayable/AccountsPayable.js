import React, { Component } from 'react';
import '../../../Styles/App.css';
import NavigationBar from '../../NavigationBar';

class AccountsPayable extends Component {
	render(){
		return (
		<div>
			<div id="NavBar" className="navbar">
				<NavigationBar links={[{'text':'Inicio','url':'/','key':0},{'text':'Cuentas Por Pagar','url':'/accounts-payable','key':1}]} />
			</div>
			<div id="MainContent">
				<h1>CUENTAS POR PAGAR</h1>
			</div>
		</div>
		);
	}
}

export default AccountsPayable;