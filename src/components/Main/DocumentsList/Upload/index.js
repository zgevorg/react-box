import React from 'react';
import RequestManager from '../../../../ApiManager/RequestManager';
import './styles.css';


class FileUploader extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        RequestManager.uploadFile(event.target, this.props.uploadFileCallback);
    }

    render() {
        return (
            <form id="upload"
                  onSubmit={this.handleSubmit}
                  encType="multipart/form-data">
                <input type="file"
                       name="file"
                       accept="text/html, text/plain, application/pdf"/>
                <input id="upl_btn"
                       type='submit'
                       value='Upload' />
            </form>

        );
    }
}

export default FileUploader;
