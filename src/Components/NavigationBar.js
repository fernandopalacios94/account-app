import React, { Component } from 'react';
import '../Styles/NavigationBar.css';
import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class NavigationBar extends Component {
	render() {		
		var elements = [];
		for (var i = 0; i < this.props.links.length ; i++) {					
			elements.push(<BreadcrumbItem key={this.props.links[i].key} className="breadcrumb-item"><NavLink to={this.props.links[i].url}>{this.props.links[i].text}</NavLink></BreadcrumbItem>)
		}
		return (<Breadcrumb>{elements}</Breadcrumb>);
	}
}
export default NavigationBar;