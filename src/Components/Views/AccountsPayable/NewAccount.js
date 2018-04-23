import React, { Component } from 'react';
import '../../../Styles/App.css';
//import NavigationBar from '../../NavigationBar';

class NewAccount extends Component {
render(){
	var obj = {'text':'Nueva Cuenta','key':3,'url':'#'};

	return (
	<div>
		<h2>Nueva Cuenta</h2>
		<div className="half-block">
			<form action="">
				<div className="form-group">
					<label htmlFor="concept">Concepto:</label>
					<input type="text" name="concept" className="form-item" />
				</div>
				<div className="form-group">
					<label htmlFor="provider">Proveedor:</label>
					<input type="text" name="provider" className="form-item" />
				</div>
				<div className="full-block">
					<div className="half-block">
						<div className="form-group">
							<label htmlFor="provider">Fecha:</label>
							<input type="text" name="provider" className="form-item" />
						</div>										
					</div>
					<div className="half-block">
						<div className="form-group">
							<label htmlFor="provider">Monto (con IVA):</label>
							<input type="text" name="provider" className="form-item" />
						</div>										
					</div>	
				</div>
				</form>					
			</div>
		</div>
		);
}
}

export default NewAccount;