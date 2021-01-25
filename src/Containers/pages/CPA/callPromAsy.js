import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../../assets/style/CPA.scss';

class CPA extends Component {

        state = {
            name: '...'
        }

    callFirstName = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('prawito')
            }, 3000)
        })
    }

    callLastName = (first) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Hudoro')
            }, 3000)
        })
    }

    respons = async () => {
        const first = await this.callFirstName();
        const last = await this.callLastName();
        const names = first + last;
        this.setState({
            name: names
        })

        // Promise.all([this.callFirstName(), this.callLastName()])
        // .then(([result, result2]) => {
        //     this.setState({
        //         name: result + result2
        //     })
        // })

        // this.callFirstName()
        // .then(result => {
        //     return this.callLastName(result)
        // })
        // .then(res => {
        //     this.setState({name : res})
        // })

        // Promise.all([this.callFirstName, this.callLastName])
        // .then((result, result2) => {
        //     this.setState({
        //         name: result + result2
        //     })
        // })

        // this.callFirstName(result => {
        //     this.callLastName(result2 => {
        //         const first = result;
        //         const last = result2;
        //         const names = first + last;
        //         this.setState({
        //             name: names
        //         })
        //     })
        // });
    }

    render() {

        const {name} = this.state;
        const {respons} = this;

        return (
            <div>
                <button className="btn btn-info btn" onClick={respons}>Respon</button>
                <h1> {name} </h1>
                <FontAwesomeIcon icon={faHome} />
                <br/>
                <FontAwesomeIcon icon={faCoffee} />
                <br/>
                <FontAwesomeIcon icon={faSpinner} />
            </div>
        );
    }
}

export default CPA;