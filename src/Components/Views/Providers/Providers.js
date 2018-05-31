import React, { Component } from 'react';
import '../../../Styles/App.css';
import NavigationBar from '../../NavigationBar';
import NewProvider from './NewProvider';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import ReactDOM from 'react-dom'; 

var GLOBAL_URL = "../../../Controllers";

class Providers extends Component {
	render(){
		return (
		<BrowserRouter>
			<div>
				<div className="row">
					<div className="col-sm-12 px-0">
						<nav aria-label="breadcrumb" id="NavBar">
							<NavigationBar links={[{'text':'Inicio','url':'/','key':0},{'text':'Proveedores','url':'/providers','key':1}]} />
						</nav>				
					</div>
					<div className="col-sm-12">
						<h1 className="d-inline-block"><b>PROVEEDORES</b></h1>					
						<NavLink className="btn btn-info btn-title ml-5 mt-1" to="/providers/new-provider"><b>AÑADIR</b></NavLink>
					</div>
					<div className="col-sm-12">
						<table id="TableProviders" className="table">
							<thead>
								<tr>
									<th>Nombre</th>
									<th>Contacto</th>
									<th>RFC</th>
									<th>Datos de Facturación</th>
								</tr>
							</thead>
							<tbody id="TableBodyProviders"></tbody>
						</table>
					</div>
				</div>
				<Route path="/providers/new-provider" component={NewProvider}/>				
			</div>
		</BrowserRouter>
		);
	}
	componentDidMount() {
		fetch('http://localhost.server.com/accounts/providers/').then((response) => {
			return response.json();
		}).then((data) => {
			const element = <Providers data={data} />;
			ReactDOM.render(
				element,
				document.getElementById('TableBodyProviders')
			);
			
      	});
      	function Providers(props){
      		var elements = [];
			for(var i = 0 ; i < props.data.length ; i++){
				elements.push(<ProviderRegistry key={i} data={props.data[i]} />);
			}
			return elements;
			
		}

		function ProviderRegistry(props){
		return (<tr><td>{props.data.name}</td><td>{props.data.email}</td><td>{props.data.rfc}</td><td>{props.data.address}</td></tr>);
		}
	}
}

export default Providers;