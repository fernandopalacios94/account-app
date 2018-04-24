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
				<form onSubmit={saveAccount} id="Form_NewAccount" action="">
					<div className="row">				
						<div className="col-md-12 col-12">
							<div className="form-group">
								<label htmlFor="concept">Concepto:</label>
								<input type="text" name="concept" className="form-control" />
							</div>
						</div>
						<div className="col-md-12 col-12">
							<div className="form-group">
								<label htmlFor="provider">Proveedor:</label>
								<input type="text" name="provider" className="form-control" />
							</div>
						</div>
						<div className="col-md-6 col-12">
							<div className="form-group">
								<label htmlFor="provider">Fecha:</label>
								<input type="text" name="date" className="form-control" />
							</div>
						</div>				
						<div className="col-md-6 col-12">
							<div className="form-group">
								<label htmlFor="provider">Monto (con IVA):</label>
								<input type="text" name="amount" className="form-control" />
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
	var form = document.getElementById('Form_NewAccount');
	var data = new FormData(form);
}

export default NewAccount;