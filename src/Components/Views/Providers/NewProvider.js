import React, { Component } from 'react';
import '../../../Styles/App.css';
//import NavigationBar from '../../NavigationBar';

class NewProvider extends Component {
	render(){
		var obj = {'text':'Nueva Cuenta','key':3,'url':'#'};

		return (
		<div className="row">
			<div className="col-sm-12">
				<h2>Nueva Cuenta</h2>
			</div>
			<div className="col-md-6 col-12">
				<form onSubmit={saveAccount} id="FormNewProvider" action="">
					<div className="row">				
						<div className="col-md-12 col-12">
							<div className="form-group">
								<label htmlFor="concept"Nombre:</label>
								<input type="text" name="name" className="form-control" />
							</div>
						</div>
						<div className="col-md-12 col-12">
							<div className="form-group">
								<label htmlFor="provider_id">RFC:</label>
								<input type="text" name="rfc" className="form-control" />
							</div>
						</div>
						<div className="col-md-6 col-12">
							<div className="form-group">
								<label htmlFor="date">Dirección de Facturación:</label>
								<input type="text" name="business_address" className="form-control" />
							</div>
						</div>				
						<div className="col-md-6 col-12">
							<div className="form-group">
								<label htmlFor="total">Correo de Facturación:</label>
								<input type="text" name="business_email" className="form-control" />
							</div>
						</div>
						<div className="col-md-12">
							<button type="submit" className="btn btn-primary float-right"><b>GUARDAR</b></button>					
						</div>
					</div>
				</form>					
			</div>
		</div>
		);
	}
}

function saveAccount(e){
	e.preventDefault();
	var form  = document.getElementById('FormNewProvider');
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
        	console.log(data.msg);
      	});
}

export default NewProvider;