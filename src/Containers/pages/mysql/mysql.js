import React, {Component} from 'react';
import TableMysql from './tableMysql';
import '../style/mysql.css';

class Mysql extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            products: [],
            product: {
                product_name: 'papan',
                product_stok: '23'
            }
            
        }
    }

    // handleFormChange(e){
    //     const FormProductNew = {...this.state.product};
    //     FormProductNew[e.target.name] = [e.target.value];
    //     this.setState({
    //         product = FormProductNew
    //     },() => {
    //         console.log('Hello world');
    //     })
    // }

    componentDidMount() {
        this.getProduct();
    }

    getProduct = _ => {
        fetch('http://localhost:4000/show')
        .then(response => response.json())
        .then(({data}) => {
            this.setState({
                products: data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    addProduct = _ => {
        const {product} = this.state;
        fetch(`http://localhost:4000/show/add?product_name=${product.product_name}&product_stok=${product.product_stok}`)
        .then(this.getProduct)
        .catch(err => console.log(err))
    }
    
    handleRemove = _ =>{
        const {product} = this.state;
        fetch(`http://localhost:4000/show/del?product_id=${product.product_id}`)
        .then(this.getProduct)
        .catch(err => console.log(err));
    }

    renderProduct = ({ product_id, product_name, product_stok }) => {
        return <TableMysql key={product_id} name={product_name}
                stok={product_stok} id={product_id} remove={this.handleRemove}
                /> 
    }

    render(){
        const {products, product} = this.state;
        return(
            <div className="wrap">
            <div className="app">
                {products.map(this.renderProduct)}
                <form>
                <input value={product.product_name} onChange={e => this.setState({ product: {...product, product_name: e.target.value} })}/>
                <input value={product.product_stok} onChange={e => this.setState({ product: {...product, product_stok: e.target.value}})}/>
                </form>
                <br/>
                <button className="btn btn-primary btn-lg" style={{width: 160}} onClick={this.addProduct}> Add </button>
            </div>
            </div>
        );
    }
}

export default Mysql;