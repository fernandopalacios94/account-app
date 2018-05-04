import React, { Component } from 'react';
import '../../Styles/App.css';
import NavigationBar from '../NavigationBar';
import { Breadcrumb, Row, Col } from 'reactstrap';
class Home extends Component {
	render(){
		return (
		<div>		
			<Row>
				<NavigationBar links={[{'text':'Inicio','url':'/','key':0}]} />		
				<Col sm="12" md="12">
					<h1>INICIO</h1>
				</Col>
			</Row>
		</div>
		);
	}
}

export default Home;