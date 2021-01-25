import React, {Component} from 'react';

class MinusPlus extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: 'Kartu reactjs',
            description: 'Ini adalah kartu JS berbasis boostrap yang dibuat oleh MKH19. Dan semua adalah awal dari kesuksesan yang akan terus berlanjut hingga menjadi development',

            order: 0,
            posts: []
        }
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        })
    }

    handleMinus = () => {
        if(this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            })
        }
    }

    // getTryAgainAPI() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(res => {
    //         this.setState({
    //             posts:res
    //         })
    //     })
    // }

    // handleRemove(data){
    //     axios.delete(`https://jsonplaceholder.typicode.com/posts/${data}`)
    //     .then(res => {
    //         this.getTryAgainAPI();
    //     })
    // }

    // componentDidMount(){
    //    this.getTryAgainAPI();
    // }

    render() {
        return (
            <div>
                <div className="footer">
                    <button className="minus">- </button>
                        <input type="text"/>
                    <button className="plus"> + </button>
                </div>
            </div>
        );
    }
}

// const getStateRedux = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// const dispatchStateRedux = (dispatch) => {
//     return {
//         handlePlus: () => dispatch({type: actiontype.PLUS_ORDER}) ,
//         handleMinus: () => dispatch({type: actiontype.MINUS_ORDER}) ,
//     }
// }

export default MinusPlus;