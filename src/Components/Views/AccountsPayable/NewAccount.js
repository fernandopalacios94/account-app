import React, { Component } from 'react';
import '../../../Styles/App.css';
//import NavigationBar from '../../NavigationBar';

class NewAccount extends Component {
	render(){
		var obj = {'text':'Nueva Cuenta','key':3,'url':'#'};

		return (
		<div className="row">
			<div className="col-sm-12">
				<h2>Nueva Cuenta</h2>
			</div>
			<div className="col-md-6 col-12">
				<form onSubmit={saveAccount} id="FormNewAccount" action="">
					<div className="row">				
						<div className="col-md-12 col-12">
							<div className="form-group">
								<label htmlFor="concept">Concepto:</label>
								<input type="text" name="concept" className="form-control" />
							</div>
						</div>
						<div className="col-md-12 col-12">
							<div className="form-group">
								<label htmlFor="provider_id">Proveedor:</label>
								<input type="text" name="provider_id" className="form-control" />
							</div>
						</div>
						<div className="col-md-6 col-12">
							<div className="form-group">
								<label htmlFor="date">Fecha:</label>
								<input type="text" name="date" className="form-control" />
							</div>
						</div>				
						<div className="col-md-6 col-12">
							<div className="form-group">
								<label htmlFor="total">Monto (con IVA):</label>
								<input type="text" name="total" className="form-control" />
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
	var form  = document.getElementById('FormNewAccount');
	console.log(form);
	var fdata = new FormData(form);
	fetch('http://localhost.server.com/accounts/accounts-payable/', {
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

export default NewAccount;