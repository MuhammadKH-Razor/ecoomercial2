import React, { Component } from 'react';
import { Button } from 'reactstrap';
import firebase from '../../config/firebase/fire';
import axios from 'axios';

class upload extends Component {

    state = {
        dataImage: ''
    }

    onChangeValue = (e) => {
        this.setState({
            dataImage: e.target.files[0]
        })
    }
    
    upload = () => {    
        const bucketName = 'images';
        const file = this.state.dataImage;
        // const storageRefs = firebase.storage().ref()
        return new Promise((resolve, reject) => {
            const storageRefs = axios.post(`https://firebasestorage.googleapis.com/v0/b/react-app-one-bb018.appspot.com/o?name=${file.name}`)
        })
    }
    
    render() {
        console.log('gambar: ', this.state.dataImage)
        return (
            <div>
                <div>
                    <input type="file" onChange={this.onChangeValue} />
                    <Button onClick={this.upload}> Upload </Button>
                </div>
            </div>
        )
    }
}

export default upload;