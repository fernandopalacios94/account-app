import React, { Component } from 'react';
import { Row, Col , FormGroup} from 'reactstrap';
import '../../../Styles/App.css';
import NavigationBar from '../../NavigationBar';
import NewProvider from './NewProvider';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import ReactDOM from 'react-dom'; 
import Modal from 'react-modal';

var GLOBAL_URL = "../../../Controllers";
const customStyles = {
  content : {
    top         : '50%',
    left        : '50%',
    right       : 'auto',
    bottom      : 'auto',
    marginRight : '-50%',
    transform   : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')
class Providers extends Component {
	constructor () {
	    super();
		function submitFormProvider(e){
			e.preventDefault();
			var form  = document.getElementById('FormProvider');
			console.log(form);
			var fdata = new FormData(form);
			fetch('http://localhost.server.com/accounts/providers/', {
				method: 'POST',
				crossDomain: true,
				headers: {
		    		'Accept': 'application/json',
		  		},
				body: fdata,
			}).then((response) => {
					return response.json();
				}).then((data) => {
		        	console.log(data.message);
		      	});
		}
	    this.state = {
	      showModal: false
	    };	    
	    this.handleOpenModal  = this.handleOpenModal.bind(this);
	    this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    handleOpenModal(){
    	this.setState({ showModal : true });
	}
	handleCloseModal(){
		this.setState({ showModal : false });
	}
	render(){
		return (
		<BrowserRouter>
			<div>
	        	<Modal isOpen={this.state.showModal} contentLabel="Minimal Modal Example" onClick={this.handleCloseModal}>
	        		<form onSubmit={submitFormProvider} id="FormProvider" action="">
		        		<Row>
		        			<Col md="12" sm="12">	        				
		        				<button className="btn btn-sm btn-danger float-right" onClick={this.handleCloseModal}>
		        					<i class="fas fa-times"></i>
		        				</button>
		        			</Col>
		        			<Col md="12" sm="12">
		        				<h3>Añadir Proveedor</h3>
		        			</Col>
		        			<Col md="12" sm="12">
		        				<FormGroup>
		        					<label for="name">Nombre:</label>
		        					<input type="text" className="form-control" name="name"  />
		        				</FormGroup>
		        			</Col>
		        			<Col md="6" sm="12">
		        				<FormGroup>
		        					<label for="rfc">RFC:</label>
		        					<input type="text" className="form-control" name="rfc"   />
		        				</FormGroup>
		        			</Col>	
		        			<Col md="6" sm="12">
		        				<FormGroup>
		        					<label for="email">Correo Electrónico:</label>
		        					<input type="text" className="form-control" name="email" />
		        				</FormGroup>
		        			</Col>
		        			<Col md="12" sm="12">
		        				<FormGroup>
		        					<label for="address">Direccion de Faturación:</label>
		        					<input type="text" className="form-control" name="address" />
		        				</FormGroup>
		        			</Col>		        			
		        		</Row>
	        		</form>
	        	</Modal>		
				<div className="row">
					<div className="col-sm-12 px-0">
						<nav aria-label="breadcrumb" id="NavBar">
							<NavigationBar links={[{'text':'Inicio','url':'/','key':0},{'text':'Proveedores','url':'/providers','key':1}]} />
						</nav>				
					</div>
					<div className="col-sm-12">
						<h1 className="d-inline-block"><b>PROVEEDORES</b></h1>					
						<button className="btn btn-info btn-title ml-5 mt-1" onClick={this.handleOpenModal}><b>AÑADIR</b></button>
					</div>
					<div className="col-sm-12">
						<table id="TableProviders" className="table">
							<thead>
								<tr>
									<th>Nombre</th>
									<th>Contacto</th>
									<th>RFC</th>
									<th>Datos de Facturación</th>
									<th></th>
								</tr>
							</thead>
							<tbody id="TableBodyProviders"></tbody>
						</table>
					</div>
				</div>
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
		return (<tr><td>{props.data.name}</td><td>{props.data.email}</td><td>{props.data.rfc}</td><td>{props.data.address}</td><td><button className="btn btn-info font-weight-bold">EDITAR</button></td></tr>);
		}	
	}
}

export default Providers;