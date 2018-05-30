import React, { Component } from 'react';
import '../../../Styles/App.css';
import NavigationBar from '../../NavigationBar';
import NewProvider from './NewProvider';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

var GLOBAL_URL = "../../../Controllers";

class Providers extends Component {
	render(){
		return (
		<BrowserRouter>
			<div>
				<div className="row">
					<nav aria-label="breadcrumb" id="NavBar">
						<NavigationBar links={[{'text':'Inicio','url':'/','key':0},{'text':'Proveedores','url':'/providers','key':1}]} />
					</nav>				
					<div className="col-sm-12">
						<h1 className="d-inline-block"><b>PROVEEDORES</b></h1>					
						<NavLink className="d-inline-block btn btn-info btn-title" to="/providers/new-provider"><b>AÑADIR</b></NavLink>
						<hr className="my-sm-1" />
					</div>
				</div>
				<Route path="/providers/new-provider" component={NewProvider}/>				
			</div>
		</BrowserRouter>
		);
	}
	componentDidMount() {
		fetch('http://localhost.server.com/accounts/providers/').then((response) => {
			return response;
		}).then((data) => {
      	});
	}
}

export default Providers;