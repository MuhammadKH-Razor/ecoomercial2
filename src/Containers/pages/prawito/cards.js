import React, {Component} from 'react';
import '../style/cards.css';
import imagees from '../images/humberger.jpg';
import HeaderCards from './headerCards';
import MinusPlus from './minusPlus';


class Cards extends Component{
    render(){
        return(
            <div>
                <HeaderCards/>
                <div className="card">
                    <div className="card-body text">
                        <img src={imagees} alt="gambar humberger makanan" className="gambar"/>
                        <p className="card-text"> </p>
                    </div>
                    <MinusPlus/>
                </div>
            </div>
        );
    }
}

export default Cards;