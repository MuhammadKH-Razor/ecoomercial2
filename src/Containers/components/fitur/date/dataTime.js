import React, {Component} from 'react';

class dateTime extends Component{
    render(){
        return(
            <div>
                <h1> Jam Saat Ini </h1>
                <h2> {new Date().toLocaleTimeString()} </h2>
            </div>
        );
    }
}

export default dateTime;