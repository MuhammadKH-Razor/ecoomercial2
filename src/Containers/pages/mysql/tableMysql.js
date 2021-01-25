import React from 'react';
import '../style/tableMysql.css';

const TableMysql = (props) => {
    return(
        <div>
                <h5 className="card-title">{props.id}</h5>
                <p className="card-text">{props.name}</p>
                <span> {props.stok}pcs </span> 
                <button className="btn btn-danger btn-lg" style={{width: 160}} value={props.id} onClick={e => props.remove(props.id)}> Delete </button>
         </div>
    );
}

export default TableMysql;