import React, { Component } from 'react';
import '../../../Styles/App.css';
import NavigationBar from '../../NavigationBar';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import NewClient from './NewClient';

var GLOBAL_URL = "../../../Controllers";

class Clients extends Component {
	render(){
		return (
		<BrowserRouter>
			<div>
				<div className="row">
					<nav aria-label="breadcrumb" id="NavBar">
						<NavigationBar links={[{'text':'Inicio','url':'/','key':0},{'text':'Clientes','url':'/clients','key':1}]} />
					</nav>				
					<div className="col-sm-12">
						<h1 className="d-inline-block"><b>Clientes</b></h1>					
						<NavLink className="d-inline-block btn btn-info btn-title" to="/clients/new-client"><b>AÑADIR</b></NavLink>
						<hr className="my-sm-1" />
					</div>
				</div>
				<Route path="/clients/new-client" component={NewClient}/>				
			</div>
		</BrowserRouter>
		);
	}
	componentDidMount() {
		fetch('http://localhost.server.com/accounts',{
			headers: new Headers({
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json'
		})
		}).then((response) => {
				return response.json();
		}).then((data) => {
	        console.log(data);
	    });
	}
}

export default Clients;