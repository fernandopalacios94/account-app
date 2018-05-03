import React, { Component } from 'react';
import '../../../Styles/App.css';
//import NavigationBar from '../../NavigationBar';

class NewClient extends Component {
	render(){
		var obj = {'text':'Nuevo Cliente','key':3,'url':'#'};

		return (
		<div className="row">
			<div className="col-sm-12">
				<h2>Nuevo Cliente</h2>
			</div>
			<div className="col-md-6 col-12">
				<form onSubmit={saveClient} id="Form_NewClient" action="">
					<div className="row">				
						<div className="col-md-12 col-12">
							<div className="form-group">
								<label htmlFor="concept">Nombre:</label>
								<input type="text" name="name" className="form-control" />
							</div>
						</div>
						<div className="col-md-12 col-12">
							<div className="form-group">
								<label htmlFor="provider">E-mail:</label>
								<input type="text" name="email" className="form-control" />
							</div>
						</div>
						<div className="col-md-6 col-12">
							<div className="form-group">
								<label htmlFor="provider">R.F.C.:</label>
								<input type="text" name="rfc" className="form-control" />
							</div>
						</div>				
						<div className="col-md-6 col-12">
							<div className="form-group">
								<label htmlFor="provider">Teléfono:</label>
								<input type="text" name="phonenumber" className="form-control" />
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

function saveClient(e){
	e.preventDefault();
}

export default NewClient;