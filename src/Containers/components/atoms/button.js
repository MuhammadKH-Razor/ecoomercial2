import React from 'react';
import '../../assets/style/button.scss';

export const Button = ({onClick, id, title, loading}) => {
    if(loading) {
        return <button className="btn btn-secondary disable btn"> Loading... </button>
    }
    
    return (
        <button className="btn btn-info enable btn" onClick={onClick} id={id} loading={loading}> 
            {title}  
        </button>
    )
}