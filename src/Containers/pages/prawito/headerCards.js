import React, {Component} from 'react';
import '../style/cards.css';
import Cards from './cards';

class HeaderCards extends Component {

    render() {
        return (
            <div>
                <div className="navs">
                    <h1 className="angka">  </h1>
                </div>
                <Cards/>
            </div>
        );
    }
}

export default HeaderCards;