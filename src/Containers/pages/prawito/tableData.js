import React from 'react';
import './tableData.css';

const Table = (props) => {
    return(
        <div>
            <div className="kartu">
                <div className="card">
                    <img src="https://placeimg.com/640/480/tech"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.data.title}</h5>
                        <p className="card-text">{props.data.body}</p>
                        <a href="#" className="btn btn-primary" onClick={() => props.remove(props.data.id)}>Remove</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;