import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import $ from 'jquery';
import axios from 'axios';
import './Styles/FileUploader.css';
import FileIcon, { defaultStyles } from 'react-file-icon';
import { listFiles } from '../Actions/FileActions'
Window.$ = $;

class FileList extends Component {
	constructor(props) {
		super(props);
		this.list = this.list.bind(this);
	}

	list = function () {
		var k = 0;
		this.props.listFiles();
		if ((this.props.Files !== undefined || this.props.Files !== null) && this.props.Files <= 0) {
			this.props.Files.forEach(element => {
				React.createElement(FileIcon, { extension: element.name.split(".")[element.name.split(".").length - 1], key: "myrfvk" + k++ })
			});
		}
	}

	render() {
		this.list();
		return (
			<div style={{ flex: '1 1 auto', flexFlow: 'column' }} >
				{(this.props.Files !== undefined && this.props.Files.length <= 0) ? this.list() : null}
			</div>
		)
	}
}

FileList.propTypes = {
	listFiles: PropTypes.func.isRequired,
	Files: PropTypes.array
}

const mapStateToProps = (state) => ({
	Files: state.Files.Files,
	Error: state.Files.Error
})

export default withRouter(connect(mapStateToProps, { listFiles })(FileList));