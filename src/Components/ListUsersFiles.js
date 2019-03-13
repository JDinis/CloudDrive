import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import $ from 'jquery';
import './Styles/FileUploader.css';
import FileIcon, { defaultStyles } from 'react-file-icon';
import { listUserFiles, deleteUserFile } from '../Actions/FileActions'
import { isLogged } from '../Actions/LoginActions'
import UserFileUploader from './FileUploader';
import { Menu, Item, Separator, MenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import { timeout } from 'q';
Window.$ = $;

class ListUsersFiles extends Component {
	constructor(props) {
		super(props);

		this.updateFileList = this.updateFileList.bind(this);
		this.hideFileUploader = this.hideFileUploader.bind(this);
		this.onEnter = this.onEnter.bind(this);
		this.onDragEnd = this.onDragEnd.bind(this);
		this.onExit = this.onExit.bind(this);
		this.downloadFile = this.downloadFile.bind(this);
		this.deleteThisFile = this.deleteThisFile.bind(this);
	}

	downloadFile(e) {
		if (e.event !== undefined) {
			if (e.event.preventDefault)
				e.event.preventDefault();
			if (e.event.stopPropagation)
				e.event.stopPropagation();
		}

		const link = document.createElement('a');
		var currentTarget = (e.currentTarget !== undefined) ? e.currentTarget : e.props.ref;
		link.href = '../../files/' + this.props.username + "/" + ReactDOM.findDOMNode(currentTarget).children[1].innerHTML;
		link.download = ReactDOM.findDOMNode(currentTarget).children[1].innerHTML;
		link.click();
		ReactDOM.findDOMNode(link).remove();
	}

	deleteThisFile(e, menuId) {
		if (e.event !== undefined) {
			if (e.event.preventDefault)
				e.event.preventDefault();
			if (e.event.stopPropagation)
				e.event.stopPropagation();
		}

		var currentTarget = (e.currentTarget !== undefined) ? e.currentTarget : e.props.ref;
		this.props.deleteUserFile(this.props.username, ReactDOM.findDOMNode(currentTarget).children[1].innerHTML,
			() => {
				this.props.forceRerender();
			});
		window.location.reload();
		return false;
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

	hideFileUploader() {
		this.hidden = false;
		$("#fileUp").hide();
		this.forceUpdate();
	}

	updateFileList() {
		this.props.listUserFiles();
	}

	componentWillMount() {
		this.props.isLogged(this.props.User.username);
		this.props.listUserFiles();
	}

	render() {
		let hidden = true;
		var k = 0;
		var arr = [];
		const MyAwesomeMenu = ({ menuId }) => (
			<Menu id='menu_id'>
				<Item onClick={(e) => this.downloadFile(e)}>Download File</Item>
				<Separator />
				<Item onClick={e => this.deleteThisFile(e, menuId)}>Delete File</Item>
			</Menu>
		);

		return (
			<div>
				<div onDrag={this.onEnter} onDragEnter={this.onEnter} onDragOver={this.onEnter} style={{ flex: '1 1 auto', marginTop: "4vh", marginLeft: "3vh", minHeight: "70vh", alignContent: "baseline", flexFlow: "row", display: "flex", flexWrap: "wrap" }} >
					{

						this.props.Files.forEach(element => {
							var ext = element.split(".")[element.split(".").length - 1].toString();
							var comp = React.createElement('div', { onClick: this.downloadFile, id: "div" + k++, style: { WebkitFontSmoothing: 'antialiased', width: "fit-content", flexDirection: "column", height: "90px", display: "flex" }, key: "myrfvkdiv" + k },
								[
									React.createElement(FileIcon, { extension: ext, key: "myrfvk" + k, ...defaultStyles[ext], size: 64, marginLeft: "10px" }),
									React.createElement('p', { style: { display: "block", textOverflow: "ellipsis", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden", width: "64px" }, key: "myrfvklabel" + k }, element)
								]);
							arr.push(
								React.createElement(MenuProvider,
									{ id: 'menu_id', onContextMenu: this.handleContextMenu, key: 'menuId' + k, style: { height: '90px' } }, comp))
						})
					}
					<MyAwesomeMenu />
					{arr}
				</div>
				<div id="fileUp" onDragEnd={this.onDragEnd} onDragLeave={this.onDragEnd} onDragExit={this.onDragEnd} onDrop={this.onExit} style={{ position: "absolute", top: "10vh", left: 0, right: 0, bottom: 0, minHeight: "74vh", maxHeight: "74vh", opacity: "0.4", display: this.hidden ? "block" : "none" }} >
					<UserFileUploader listFiles={this.updateFileList} hideFileUploader={this.hideFileUploader} username={this.props.username} />
				</div>
			</div >
		)
	}
}

ListUsersFiles.propTypes = {
	isLogged: PropTypes.func.isRequired,
	listUserFiles: PropTypes.func.isRequired,
	deleteUserFile: PropTypes.func.isRequired,
	Files: PropTypes.array
}

const mapStateToProps = (state) => ({
	Files: state.Files.Files,
	Success: state.Files.Success,
	Error: state.Files.Error,
	LoggedIn: state.Login.LoggedIn,
	User: state.Login.User
})

export default withRouter(connect(mapStateToProps, { listUserFiles, deleteUserFile, isLogged })(ListUsersFiles));