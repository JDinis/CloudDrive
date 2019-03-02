import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import $ from 'jquery';
import axios from 'axios';
import './Styles/FileUploader.css';
Window.$ = $;

class FileUploader extends Component {
    constructor(props) {
        super(props);


        this.showFiles = this.showFiles.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleDragStart = this.handleDragStart.bind(this);
        this.handleProgress = this.handleProgress.bind(this);
        this.handleFiles = this.handleFiles.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    showFiles = function (files) {
        var $input = $("#formUp").find('input[type="file"]'),
            $label = $("#formUp").find('label');
        $label.text(files.length > 1 ? ($input.attr('data-multiple-caption') || '').replace('{count}', files.length) : files[0].name);
    };

    handleDragLeave(event) {
        this.handleEvent(event);
        $("#formUp").removeClass('is-dragover');
    }

    handleChange(event) {
        this.handleEvent(event);
        if (event.dataTransfer !== undefined)
            this.showFiles(event.dataTransfer);
        $("#formUp").trigger('ondrop');
    }

    handleEvent(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    handleDragStart(event) {
        this.handleEvent(event);
        $("#formUp").addClass('is-dragover');
    }

    handleDrop(event) {
        $("#formUp").removeClass('is-dragover');
        if ($("#formUp").hasClass('is-uploading')) return false;

        var files = event.dataTransfer.files;
        this.handleEvent(event);

        var formdata = new FormData();

        this.showFiles(files);


        for (var i = 0; i < files.length; i++) {
            let file = files[i];

            var isFolder = file.name.split(".").length === 1 && file.size % 4096 === 0 && file.type === "";
            if (!isFolder)
                formdata.append('files', file);
            else {
                alert("Can't upload folders directly, please use the new folder button!");
            }
        }

        axios({
            url: '/backend/file/upload',
            method: 'POST',
            data: formdata,
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then((res) => {
            if (JSON.parse(res.data).success) {
                $("#formUp").addClass('is-uploading').removeClass('is-error');
                $("#formUp").find('label').text('File Uploaded Successfully');
            } else {
                window.location.assign('/logout');
            }
        },
            {}, (err) => {
                $("#formUp").removeClass('is-uploading').addClass('is-error');
                console.log('Error: ' + err);
            })
    }

    handleProgress(event) {
        var vis = ("#prog").style.display;
        if (vis === 'none')
            ("#prog").style.display = 'initial';

        $("#prog").val = event.progress;
    }

    handleFiles(event) {
        this.handleEvent(event);
        $("#formUp").addClass('is-dragover');
    }

    render() {
        return (
            <div style={{ flex: '1 1 auto', flexFlow: 'column' }}>
                <form id="formUp" className="box has-advanced-upload" encType="multipart/form-data" method="POST" action="/backend/file/upload" >
                    <center display="none">
                        <div class="box__input">
                            <input class="box__file" data-multiple-caption="{count} files selected" style={{ flex: 1, opacity: 0, width: "100%", height: "65vh" }}
                                type="file" title="" name="Files" multiple
                                onChange={this.handleChange}
                                onClick={this.handleEvent}
                                onDrag={this.handleEvent}
                                onDragEnter={this.handleFiles}
                                onDragEnd={this.handleDragLeave}
                                onDrop={this.handleDrop}
                                onDragLeave={this.handleDragLeave}
                                onDragStart={this.handleDragStart}
                                onDragOver={this.handleFiles}
                                onProgress={this.handleProgress} />
                            <label for="file"><strong>Choose a file</strong><span style={{ display: 'none' }} class="box__dragndrop"> or drag it here</span>.</label>
                            <button style={{ display: 'none' }} class="box__button" onClick={this.handleChange}>Upload</button>
                        </div>
                        <div style={{ display: 'none' }} class="box__uploading">Uploading&hellip;</div>
                        <div style={{ display: 'none' }} class="box__success">Done!</div>
                        <div style={{ display: 'none' }} class="box__error">Error! <span></span>.</div>
                    </center>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

export default withRouter(connect(mapStateToProps, null)(FileUploader));