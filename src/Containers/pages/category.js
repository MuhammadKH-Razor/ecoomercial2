import React from 'react';
import { connect } from 'react-redux';
import food1 from '../assets/images/news/pizza2.jpg';
import food2 from '../assets/images/news/pizza3.jpg';
import food3 from '../assets/images/news/pizza4.jpg';

class Category extends React.Component {

    state = {
        categoryMenu: 'food',
        kota: ''
    }

    componentDidMount = async () => {
        const { kota } = this.state
        const data3 = await JSON.parse(localStorage.getItem('dataFirestore'));

        setTimeout(() => {
            this.setState({
                kota: data3.kota
            })
            console.log('kota', this.state.kota)
        }, 2000)

    }

    slideFull = () => {
        document.getElementById('logoBoard').classList.toggle('gambar-board-show')
        document.getElementById('sec-a').classList.toggle('sec-1a-show')
        document.getElementById('sec-b').classList.toggle('sec-1ab-show')
    }

    foodMenu = () => {
        this.setState({
            categoryMenu: 'food'
        })
    }

    drinkMenu = () => {
        this.setState({
            categoryMenu: 'drink'
        })
    }

    catalogMenu = () => {
        this.setState({
            categoryMenu: 'catalog'
        })
    }

    shortMenu = () => {
        this.setState({
            categoryMenu: 'short'
        })
    }

    hatsMenu = () => {
        this.setState({
            categoryMenu: 'hats'
        })
    }

    healtMenu = () => {
        this.setState({
            categoryMenu: 'healt'
        })
    }

    render() {
        const { kota } = this.state;
        const { slideFull, foodMenu, drinkMenu, catalogMenu, hatsMenu, shortMenu, healtMenu } = this;
        const { categoryMenu } = this.state;
        console.log(this.state.categoryMenu);

        if (this.props.menu === 'food' || this.props.menu === 'chicken' || this.props.menu === 'pizza' || this.props.menu === 'biscuit' || this.props.menu === 'burger') {
            return (
                <div className="content-body-2">
                    <div className="wrap-categ" onClick={this.props.getFoodMenu}>
                        <div className="page-categ">
                            <img src={food1} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Food</h4>
                        </div>
                    </div>
                    <div className="wrap-categ" onClick={this.props.getDrinkMenu}>
                        <div className="page-categ">
                            <img src={food2} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Drink</h4>
                        </div>
                    </div>
                    <div className="wrap-categ" onClick={this.props.getCatalogMenu}>
                        <div className="page-categ">
                            <img src={food3} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Catalog</h4>
                        </div>
                    </div>
                    <div className="wrap-categ" onClick={this.props.outMenu}>
                        <div className="page-categ">
                            <img src={food3} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Exit</h4>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.menu === 'drink' || this.props.menu === 'coffee' || this.props.menu === 'tea' || this.props.menu === 'water' || this.props.menu === 'ice') {
            return (
                <div className="content-body-2">
                    <div className="wrap-categ" onClick={this.props.getFoodMenu}>
                        <div className="page-categ">
                            <img src={food1} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Food</h4>
                        </div>
                    </div>
                    <div className="wrap-categ" onClick={this.props.getDrinkMenu}>
                        <div className="page-categ">
                            <img src={food2} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Drink</h4>
                        </div>
                    </div>
                    <div className="wrap-categ" onClick={this.props.getCatalogMenu}>
                        <div className="page-categ">
                            <img src={food3} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Catalog</h4>
                        </div>
                    </div>
                    <div className="wrap-categ" onClick={this.props.outMenu}>
                        <div className="page-categ">
                            <img src={food3} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Exit</h4>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.menu === 'catalog' || this.props.menu === 'table' || this.props.menu === 'chair' || this.props.menu === 'wardrop' || this.props.menu === 'bed') {
            return (
                <div className="content-body-2">
                    <div className="wrap-categ" onClick={this.props.getFoodMenu}>
                        <div className="page-categ">
                            <img src={food1} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Food</h4>
                        </div>
                    </div>
                    <div className="wrap-categ" onClick={this.props.getDrinkMenu}>
                        <div className="page-categ">
                            <img src={food2} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Drink</h4>
                        </div>
                    </div>
                    <div className="wrap-categ" onClick={this.props.getCatalogMenu}>
                        <div className="page-categ">
                            <img src={food3} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Catalog</h4>
                        </div>
                    </div>
                    <div className="wrap-categ" onClick={this.props.outMenu}>
                        <div className="page-categ">
                            <img src={food3} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Exit</h4>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.menu === 'short' || this.props.menu === 'short2' || this.props.menu === 'glove' || this.props.menu === 'hats' || this.props.menu === 'shoes') {
            return (
                <div className="content-body-2">
                    <div className="wrap-categ" onClick={this.props.getFoodMenu}>
                        <div className="page-categ">
                            <img src={food1} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Food</h4>
                        </div>
                    </div>
                    <div className="wrap-categ" onClick={this.props.getDrinkMenu}>
                        <div className="page-categ">
                            <img src={food2} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Drink</h4>
                        </div>
                    </div>
                    <div className="wrap-categ" onClick={this.props.getCatalogMenu}>
                        <div className="page-categ">
                            <img src={food3} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Catalog</h4>
                        </div>
                    </div>
                    <div className="wrap-categ" onClick={this.props.outMenu}>
                        <div className="page-categ">
                            <img src={food3} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Exit</h4>
                        </div>
                    </div>
                </div>
            )
        }

        if (kota === '108' || kota === '109') {
            return (
                <div className="content-body-2">
                    <div className="wrap-categ" onClick={this.props.getFoodMenu}>
                        <div className="page-categ">
                            <img src={food1} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Food</h4>
                        </div>
                    </div>
                    <div className="wrap-categ" onClick={this.props.getDrinkMenu}>
                        <div className="page-categ">
                            <img src={food2} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Drink</h4>
                        </div>
                    </div>
                    <div className="wrap-categ" onClick={this.props.getCatalogMenu}>
                        <div className="page-categ">
                            <img src={food3} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Catalog</h4>
                        </div>
                    </div>
                    <div className="wrap-categ" onClick={this.props.getShortMenu}>
                        <div className="page-categ">
                            <img src={food3} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Forms</h4>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="content-body-2">
                    <div className="wrap-categ" onClick={this.props.getFoodMenu}>
                        <div className="page-categ">
                            <img src={food1} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Food</h4>
                        </div>
                    </div>
                    <div className="wrap-categ" onClick={this.props.getDrinkMenu}>
                        <div className="page-categ">
                            <img src={food2} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Drink</h4>
                        </div>
                    </div>
                    <div className="wrap-categ" onClick={this.props.getCatalogMenu}>
                        <div className="page-categ">
                            <img src={food3} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Catalog</h4>
                        </div>
                    </div>
                    <div className="wrap-categ" onClick={this.props.getShortMenu}>
                        <div className="page-categ">
                            <img src={food3} alt="" />
                        </div>
                        <div className="content-categ">
                            <h4>Forms</h4>
                        </div>
                    </div>
                </div>
            )
        }


    }
}

const getStateRedux = (state) => {
    return {
        menu: state.menuSekarang
    }
}

const getActionRedux = (dispatch) => {
    return {
        getFoodMenu: () => dispatch({ type: 'MENU_SEKARANG', value: 'food' }),
        getFoodChicken: () => dispatch({ type: 'MENU_SEKARANG', value: 'chicken' }),
        getFoodBurger: () => dispatch({ type: 'MENU_SEKARANG', value: 'burger' }),
        getFoodPizza: () => dispatch({ type: 'MENU_SEKARANG', value: 'pizza' }),
        getFoodBiscuit: () => dispatch({ type: 'MENU_SEKARANG', value: 'biscuit' }),
        getDrinkMenu: () => dispatch({ type: 'MENU_SEKARANG', value: 'drink' }),
        getDrinkCoffee: () => dispatch({ type: 'MENU_SEKARANG', value: 'coffee' }),
        getDrinkIce: () => dispatch({ type: 'MENU_SEKARANG', value: 'ice' }),
        getDrinkTea: () => dispatch({ type: 'MENU_SEKARANG', value: 'tea' }),
        getDrinkWater: () => dispatch({ type: 'MENU_SEKARANG', value: 'water' }),
        getCatalogMenu: () => dispatch({ type: 'MENU_SEKARANG', value: 'catalog' }),
        getCatalogTable: () => dispatch({ type: 'MENU_SEKARANG', value: 'table' }),
        getCatalogBed: () => dispatch({ type: 'MENU_SEKARANG', value: 'bed' }),
        getCatalogChair: () => dispatch({ type: 'MENU_SEKARANG', value: 'chair' }),
        getCatalogWardrop: () => dispatch({ type: 'MENU_SEKARANG', value: 'wardrop' }),
        getShortMenu: () => dispatch({ type: 'MENU_SEKARANG', value: 'short' }),
        getShortShort2: () => dispatch({ type: 'MENU_SEKARANG', value: 'short2' }),
        getShortGlove: () => dispatch({ type: 'MENU_SEKARANG', value: 'glove' }),
        getShortHats: () => dispatch({ type: 'MENU_SEKARANG', value: 'hats' }),
        getShortShoes: () => dispatch({ type: 'MENU_SEKARANG', value: 'shoes' }),
        outMenu: () => dispatch({ type: 'MENU_SEKARANG', value: '' }),
    }
}

export default connect(getStateRedux, getActionRedux)(Category);