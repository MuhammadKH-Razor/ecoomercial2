import React, {Component} from 'react';

class data extends Component{
    render(){
        return(
            <div>
                <div className="card" style={{margin:40}}>
                <div className="card-body">
                    <h5 className="card-title tlt" onClick={() => this.props.goDetail(this.props.data.id)}>{this.props.data.title}</h5>
                    <p className="card-text">{this.props.data.body}</p>
                    <div className="btn">
                    <a className="btn btn-danger text-white btn" onClick={() => this.props.remove(this.props.data.id)}>Remove</a>
                    <a className="btn btn-info text-white btn" onClick={() => this.props.update(this.props.data)}>Update</a>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default data;