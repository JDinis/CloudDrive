import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import $ from 'jquery';
import axios from 'axios';
import './Styles/FileUploader.css';
import FileIcon, { defaultStyles } from 'react-file-icon';
Window.$ = $;

class FileList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			specialProps: []
		}
	}

	componentWillMount() {
		axios.get('/backend/file/list', (res) => {
			if (JSON.parse(res.data).files) {
				var k = 0;
				JSON.parse(res.data).files.forEach(file => {
					this.setState({
						...this.state,
						specialProps: this.state.specialProps.fill(React.createElement(FileIcon, { extension: file.name.split(".")[file.name.split(".").length - 1], key: "myrfvk" + k++ }))
					});
				});
			} else {
				window.location.assign('/logout');
			}
		},
			{}, (err) => {
				console.log('Error: ' + err);
			})
	}

	render() {
		return (
			<div style={{ flex: '1 1 auto', flexFlow: 'column' }} >
				{this.state.specialProps}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
})

export default withRouter(connect(mapStateToProps, null)(FileList));