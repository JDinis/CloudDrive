import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { FilePond } from 'react-filepond';

class FileUploader extends Component {
    constructor(props) {
        super(props);

        this.handleFiles = this.handleFiles.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }

        ReactDOM.findDOMNode(this).submit();
    }

    handleFiles(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
    }

    render() {
        return (
            <form method="post" style={{ width: "100%", height: "100%" }} encType="multipart/form-data" action="http://localhost:3001/backend/file/upload">
                <div style={{ width: "100%", paddingTop: "2.6%", height: "100%", paddingBottom: "100%" }} onDrop={this.handleDrop} onDragOver={this.handleFiles}></div>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
})

export default withRouter(connect(mapStateToProps, null)(FileUploader));