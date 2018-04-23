import React, { Component } from 'react';
import '../Styles/NavigationBar.css';
import { NavLink } from 'react-router-dom';


class NavigationBar extends Component {
	render() {		
		var elements = [];
		for (var i = 0; i < this.props.links.length ; i++) {					
			elements.push(<li key={this.props.links[i].key} className="breadcrumb-item"><NavLink to={this.props.links[i].url}>{this.props.links[i].text}</NavLink></li>)
		}
		return (<ol className="breadcrumb">{elements}</ol>);
	}
}
export default NavigationBar;