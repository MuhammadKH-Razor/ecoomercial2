import React from 'react';
import { connect } from 'react-redux';
import food1 from '../assets/images/news/pizza2.jpg';
import food2 from '../assets/images/news/pizza3.jpg';
import food3 from '../assets/images/news/pizza4.jpg';
import food4 from '../assets/images/news/pizza1.jpg';
import burger1 from '../assets/images/news/burger1.jpg';
import burger2 from '../assets/images/news/burger2.jpg';
import burger3 from '../assets/images/news/burger3.jpg';
import burger4 from '../assets/images/news/burger4.jpg';
import chicken1 from '../assets/images/news/chicken1.jpg';
import chicken2 from '../assets/images/news/chicken2.jpg';
import chicken3 from '../assets/images/news/chicken3.jpg';
import chicken4 from '../assets/images/news/chicken4.jpg';
import biscuit1 from '../assets/images/news/biscuit1.jpg';
import biscuit2 from '../assets/images/news/biscuit2.jpg';
import biscuit3 from '../assets/images/news/biscuit3.jpg';
import biscuit4 from '../assets/images/news/biscuit4.jpg';
import drink1 from '../assets/images/news/drink7.jpg';
import drink2 from '../assets/images/news/drink8.jpg';
import drink3 from '../assets/images/news/drink4.jpg';
import drink4 from '../assets/images/news/drink1.jpg';
import kursi1 from '../assets/images/news/kursi1.jpg';
import kursi2 from '../assets/images/news/kursi2.jpg';
import kursi3 from '../assets/images/news/kursi3.jpg';
import meja1 from '../assets/images/news/table1.jpg';
import meja2 from '../assets/images/news/table2.jpg';
import lemari1 from '../assets/images/news/lemari1.jpg';
import lemari2 from '../assets/images/news/lemari2.jpg';

class Menu extends React.Component {

    state = {
        orderListValue: 0.00,
        checkListOrder: [],
        dataUsers: [],
        emailUser: '',
        kotaUser: '',
        kota: ''
    }

    componentDidMount = async () => {
        const { kota } = this.state
        const data1 = await JSON.parse(localStorage.getItem('loginData'));
        const data2 = await JSON.parse(localStorage.getItem('dataUser'));
        const data3 = await JSON.parse(localStorage.getItem('dataFirestore'));

        setTimeout(() => {
            this.setState({
                emailUser: data1.email,
                dataUsers: data2,
                kota: data3.kota
            })
            console.log('kota', this.state.kota)
        }, 1000)

    }

    render() {
        const { kota } = this.state;
        const { getPriceAll } = this;

        if (this.props.menu === 'food') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <h5>Harga murah, rasa pas</h5>
                    <div className="wrap-list-menu">
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={food1} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>5k</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food2} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>7k</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food2} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food4} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Paket porsi spesial</h2>
                <h5>Tidak sama dan tetap enak</h5>
                <div className="wrap-list-menu">
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={food1} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>5k</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food2} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>7k</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food3} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food4} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>

                </div>
            )
        } else if (this.props.menu === 'pizza') {
            return (
                <div>
                <h2>Paket hemat</h2>
                <h5>Harga murah, rasa pas</h5>
                <div className="wrap-list-menu">
                <div className="board-list-menu">
                    <div>
                        <div className="ff ff1">
                            <img src={food1} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>Bodel story</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>5k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>The estaminet</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>7k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La paris dakar</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food4} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La faras</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Paket porsi spesial</h2>
            <h5>Tidak sama dan tetap enak</h5>
            <div className="wrap-list-menu">
                <div className="board-list-menu">
                    <div>
                        <div className="ff ff1">
                            <img src={food1} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>Bodel story</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>5k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>The estaminet</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>7k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food3} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La paris dakar</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food4} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La faras</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

            </div>
            )

        } else if (this.props.menu === 'burger') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <h5>Harga murah, rasa pas</h5>
                    <div className="wrap-list-menu">
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={food1} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>5k</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food2} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>7k</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food2} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food4} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Paket porsi spesial</h2>
                <h5>Tidak sama dan tetap enak</h5>
                <div className="wrap-list-menu">
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={food1} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>5k</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food2} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>7k</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food3} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food4} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>

                </div>
            )

        } else if (this.props.menu === 'chicken') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <h5>Harga murah, rasa pas</h5>
                    <div className="wrap-list-menu">
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={food1} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>5k</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food2} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>7k</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food2} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food4} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Paket porsi spesial</h2>
                <h5>Tidak sama dan tetap enak</h5>
                <div className="wrap-list-menu">
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={food1} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>5k</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food2} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>7k</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food3} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food4} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>

                </div>
            )

        } else if (this.props.menu === 'biscuit') {
            return (
                <div>
                <h2>Paket hemat</h2>
                <h5>Harga murah, rasa pas</h5>
                <div className="wrap-list-menu">
                <div className="board-list-menu">
                    <div>
                        <div className="ff ff1">
                            <img src={food1} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>Bodel story</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>5k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>The estaminet</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>7k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La paris dakar</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food4} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La faras</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Paket porsi spesial</h2>
            <h5>Tidak sama dan tetap enak</h5>
            <div className="wrap-list-menu">
                <div className="board-list-menu">
                    <div>
                        <div className="ff ff1">
                            <img src={food1} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>Bodel story</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>5k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>The estaminet</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>7k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food3} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La paris dakar</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food4} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La faras</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

            </div>
            )

        } else if (this.props.menu === 'drink') {
            return (
                <div>
                <h2>Paket hemat</h2>
                <h5>Harga murah, rasa pas</h5>
                <div className="wrap-list-menu">
                <div className="board-list-menu">
                    <div>
                        <div className="ff ff1">
                            <img src={food1} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>Bodel story</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>5k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>The estaminet</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>7k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La paris dakar</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food4} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La faras</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Paket porsi spesial</h2>
            <h5>Tidak sama dan tetap enak</h5>
            <div className="wrap-list-menu">
                <div className="board-list-menu">
                    <div>
                        <div className="ff ff1">
                            <img src={food1} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>Bodel story</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>5k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>The estaminet</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>7k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food3} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La paris dakar</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food4} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La faras</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

            </div>
            )
        } else if (this.props.menu === 'coffee') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <h5>Harga murah, rasa pas</h5>
                    <div className="wrap-list-menu">
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={food1} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>5k</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food2} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>7k</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food2} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food4} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Paket porsi spesial</h2>
                <h5>Tidak sama dan tetap enak</h5>
                <div className="wrap-list-menu">
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={food1} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>5k</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food2} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>7k</span>
                                    <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food3} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={food4} alt="" />
                                <span><i className="fas fa-star"></i> 4.7</span>
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <br />
                                <div className="list-details">
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>

                </div>
            )

        } else if (this.props.menu === 'tea') {
            return (
                <div>
                <h2>Paket hemat</h2>
                <h5>Harga murah, rasa pas</h5>
                <div className="wrap-list-menu">
                <div className="board-list-menu">
                    <div>
                        <div className="ff ff1">
                            <img src={food1} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>Bodel story</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>5k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>The estaminet</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>7k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La paris dakar</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food4} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La faras</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Paket porsi spesial</h2>
            <h5>Tidak sama dan tetap enak</h5>
            <div className="wrap-list-menu">
                <div className="board-list-menu">
                    <div>
                        <div className="ff ff1">
                            <img src={food1} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>Bodel story</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>5k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>The estaminet</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>7k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food3} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La paris dakar</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food4} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La faras</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

            </div>
            )

        } else if (this.props.menu === 'water') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={drink1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>Ice coffee</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={drink2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>Tea coffee</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={drink3} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>Lo berlins ace</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={drink4} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>Ace fams ui</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )

        } else if (this.props.menu === 'ice') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={drink1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>Ice coffee</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={drink2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>Tea coffee</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={drink3} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>Lo berlins ace</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={drink4} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>Ace fams ui</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )

        } else if (this.props.menu === 'catalog') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={meja1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={meja2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        } else if (this.props.menu === 'bed') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={meja1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={meja2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )

        } else if (this.props.menu === 'wardrop') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={meja1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={meja2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )

        } else if (this.props.menu === 'chair') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={meja1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={meja2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )

        } else if (this.props.menu === 'table') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={meja1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={meja2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )

        } else if (this.props.menu === 'short') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={meja1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={meja2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        } else if (this.props.menu === 'short2') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={meja1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={meja2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )

        } else if (this.props.menu === 'glove') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={meja1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={meja2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )

        } else if (this.props.menu === 'shoes') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={meja1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={meja2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )

        } else if (this.props.menu === 'hats') {
            return (
                <div>
                    <h2>Paket hemat</h2>
                    <div className="board-list-menu">
                        <div>
                            <div className="ff ff1">
                                <img src={meja1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>Bodel story</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={meja2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>The estaminet</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari1} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La paris dakar</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="ff ff1">
                                <img src={lemari2} alt="" />
                            </div>
                            <div className="ff ff2">
                                <small>La faras</small>
                                <div className="list-details">
                                    <span><i className="fas fa-star"></i> 4.7</span>
                                    <span className="category">foods</span>
                                    <span>$4</span>
                                    <span><i className="fas fa-cart-plus"></i></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )

        }

        if (kota === '108') {
            return (
                <div>
                <h2>Paket hemat</h2>
                <h5>Harga murah, rasa pas</h5>
                <div className="wrap-list-menu">
                <div className="board-list-menu">
                    <div>
                        <div className="ff ff1">
                            <img src={food1} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>Bodel story</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>5k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>The estaminet</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>7k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La paris dakar</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food4} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La faras</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Paket porsi spesial</h2>
            <h5>Tidak sama dan tetap enak</h5>
            <div className="wrap-list-menu">
                <div className="board-list-menu">
                    <div>
                        <div className="ff ff1">
                            <img src={food1} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>Bodel story</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>5k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 5000, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>The estaminet</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>7k</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 7000, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food3} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La paris dakar</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food4} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La faras</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$4</span>
                                <span className="cart-plus"><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

            </div>
            )
        } else {
            return (
                <div>
                <h2>Paket hemat</h2>
                <h5>Harga murah, rasa pas</h5>
                <div className="wrap-list-menu">
                <div className="board-list-menu">
                    <div>
                        <div className="ff ff1">
                            <img src={food1} alt="" />
                            <span><i className="fas fa-star"></i> 4.5</span>
                        </div>
                        <div className="ff ff2">
                            <small>Bodel story</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$100</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('Bodel story', 100, { food1 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>The estaminet</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$200</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 200, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La paris dakar</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$300</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('La paris dakar saint', 300, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food4} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La faras</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$220</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 220, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Paket porsi spesial</h2>
            <h5>Tidak sama dan tetap enak</h5>
            <div className="wrap-list-menu">
                <div className="board-list-menu">
                    <div>
                        <div className="ff ff1">
                            <img src={food1} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>Bodel story</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$200</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 200, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>The estaminet</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$400</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 400, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food3} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La paris dakar</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$100</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 100, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food4} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La faras</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$10</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 10, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

            <h2>Paket makan malam</h2>
            <h5>Malam bersama rasa lezat..</h5>
            <div className="wrap-list-menu">
                <div className="board-list-menu">
                    <div>
                        <div className="ff ff1">
                            <img src={food1} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>Bodel story</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$200</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 200, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food2} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>The estaminet</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$400</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 400, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food3} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La paris dakar</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$100</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 100, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="ff ff1">
                            <img src={food4} alt="" />
                            <span><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <div className="ff ff2">
                            <small>La faras</small>
                            <br />
                            <div className="list-details">
                                <span className="category">foods</span>
                                <span>$10</span>
                                <span className="cart-plus" onClick={(s1, s2, s3, s4, s5, s6) => this.props.orderMenu('The estaminet', 10, { food2 }, 'food', 'cirebon', 'jl. Ambarawa')}><i className="fas fa-cart-plus"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

            </div>
            )
        }

    }
}

const getStateRedux = (state) => {
    return {
        menu: state.menuSekarang,
        dataUserLogins: state.dataUserLogin
    }
}

export default connect(getStateRedux, null)(Menu);                                                                                                                                      