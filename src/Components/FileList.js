import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import $ from 'jquery';
import axios from 'axios';
import './Styles/FileUploader.css';
import FileIcon, { defaultStyles } from 'react-file-icon';
import { listFiles, deleteFile } from '../Actions/FileActions'
import FileUploader from './FileUploader';
import { Menu, Item, Separator, Submenu, MenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
Window.$ = $;

class FileList extends Component {
	constructor(props) {
		super(props);

		this.onEnter = this.onEnter.bind(this);
		this.onDragEnd = this.onDragEnd.bind(this);
		this.onExit = this.onExit.bind(this);
		this.downloadFile = this.downloadFile.bind(this);
		this.deleteFile = this.deleteFile.bind(this);
	}

	downloadFile(e) {
		const link = document.createElement('a');
		link.href = '../../search/' + ReactDOM.findDOMNode(e.currentTarget).children[1].innerHTML;
		link.download = ReactDOM.findDOMNode(e.currentTarget).children[1].innerHTML;
		link.click();
		ReactDOM.findDOMNode(link).remove();
	}

	deleteFile(e) {
		this.props.deleteFile(ReactDOM.findDOMNode(e.currentTarget).children[1].innerHTML);
	}

	onEnter(e) {
		e.preventDefault();
		e.stopPropagation();
		this.hidden = true;
		this.forceUpdate();
	}

	onExit(e) {
		e.preventDefault();
		e.stopPropagation();
		this.hidden = false;
		this.forceUpdate();
	}

	onDragEnd(e) {
		this.hidden = false;
		this.forceUpdate();
	}


	componentWillMount() {
		this.props.listFiles();
	}
	render() {
		let hidden = true;
		var k = 0;
		var arr = [];
		const MyAwesomeMenu = ({ menuId, downloadFile, deleteFile }) => (
			<Menu id='menu_id'>
				<Item onClick={() => downloadFile}>Download File</Item>
				<Separator />
				<Item onClick={(e) => deleteFile}>Delete File</Item>
			</Menu>
		);
		return (
			<div>
				<div onDrag={this.onEnter} onDragEnter={this.onEnter} onDragOver={this.onEnter} /*onDragLeave={this.onExit}*/ style={{ flex: '1 1 auto', marginTop: "4vh", marginLeft: "3vh", minHeight: "70vh", maxHeight: "70vh", flexFlow: "row", display: "flex" }} >
					{
						this.props.Files.forEach(element => {
							var ext = element.split(".")[element.split(".").length - 1].toString();
							var comp = React.createElement('div', { onClick: this.downloadFile, id: "div" + k++, style: { WebkitFontSmoothing: 'antialiased', width: "fit-content", flexDirection: "column", height: "fit-content", display: "flex" }, key: "myrfvkdiv" + k },
								[
									React.createElement(FileIcon, { extension: ext, key: "myrfvk" + k, ...defaultStyles[ext], size: 64, marginLeft: "10px" }),
									React.createElement('p', { style: { display: "block", textOverflow: "ellipsis", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden", width: "64px" }, key: "myrfvklabel" + k }, element)
								]);
							arr.push(
								React.createElement(MenuProvider,
									{ id: 'menu_id', onContextMenu: this.handleContextMenu, key: 'menuIdx' + k }, comp))
						})
					}
					<MyAwesomeMenu downloadFile={this.downloadFile} deleteFile={this.deleteFile} />
					{arr}
				</div>
				<div /*onDragEnter={this.onEnter}*/ onDragEnd={this.onDragEnd} onDragLeave={this.onDragEnd} onDragExit={this.onDragEnd} onDrop={this.onExit} style={{ position: "absolute", top: "10vh", left: 0, right: 0, bottom: 0, minHeight: "74vh", maxHeight: "74vh", opacity: "0.4", display: this.hidden ? "block" : "none" }} >
					<FileUploader />
				</div>
			</div >
		)
	}
}

FileList.propTypes = {
	listFiles: PropTypes.func.isRequired,
	deleteFile: PropTypes.func.isRequired,
	Files: PropTypes.array
}

const mapStateToProps = (state) => ({
	Files: state.Files.Files,
	Success: state.Files.Success,
	Error: state.Files.Error
})

export default withRouter(connect(mapStateToProps, { listFiles, deleteFile })(FileList));