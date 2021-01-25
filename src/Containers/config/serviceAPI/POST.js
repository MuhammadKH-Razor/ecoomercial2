import axios from 'axios';
import {rootAPIONGKIR} from './root';

const POST = (path, data) => {
    const promise =  new Promise((resolve, reject) => {
        axios.post(`${rootAPIONGKIR}/${path}`, data)
        .then((result => {
            resolve(result)
        }, (err) => {
            reject(err)
        }))
    })
    return promise;
}

export default POST;