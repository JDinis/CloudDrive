import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class FileUploader extends Component {
    constructor(props){
        super(props);

        this.handleFiles = this.handleFiles.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop(){
        ReactDOM.findDOMNode(this).submit();
    }

    handleFiles(event){
        if(event.preventDefault){
            event.preventDefault();
        }

    }

    render() {
        return (
            <form encType="multipart/form-data" method="POST" action="https://clouddriveserver.azurewebsites.net/backend/file" >
            <input type="file" name="Files" multiple onChange={this.handleDrop} />
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
})

export default withRouter(connect(mapStateToProps, null)(FileUploader));