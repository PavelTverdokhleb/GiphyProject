import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGifs } from '../actions/index';

class GifsSearch extends Component {
	componentWillMount() {
		this.props.getGifs();
	}

	render() {
		return (
			<div><h2 className="header">List of funny cat gifs</h2></div>
		);
	}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getGifs }, dispatch);
}

export default connect(null, mapDispatchToProps)(GifsSearch);