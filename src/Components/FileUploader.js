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
        ReactDOM.findDOMNode(this).submit();
    }

    handleFiles(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }

    }

    render() {
        return (
            <div style={{ width: "100%", paddingTop: "2.6%", height: "100%", paddingBottom: "100%" }}>
                <FilePond allowMultiple={true} server="https://clouddriveserver.azurewebsites.net/backend/file/upload" />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

export default withRouter(connect(mapStateToProps, null)(FileUploader));