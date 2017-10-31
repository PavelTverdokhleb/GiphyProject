import React, { Component } from 'react';
import { connect } from 'react-redux';

class GifsList extends Component {
	renderGifs(data){
		console.log(data);
		return (<li className="col-md-4" key={data.id}><center><iframe src={data.embed_url} width="280" height="260" frameBorder="0" allowFullScreen></iframe></center></li>);
	}


	render() {
		const gifs = this.props.gifs;
		return (
			<ul className="list">
			{gifs.map(this.renderGifs)}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return { gifs: state.gifs };
}

export default connect(mapStateToProps)(GifsList);

