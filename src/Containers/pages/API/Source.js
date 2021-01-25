import React, { Component } from 'react';
import Data from './data';
import { createBrowserHistory } from 'history';
import '../../assets/style/Source.css';
import API from '../../config/serviceAPI';
// import axios from 'axios';
// import { BrowserRouter, Route } from 'react-router-dom';
// import Routing from '../router/routing';
// import Detail from './detailPost';

class Source extends Component{

    constructor(props){
        super(props);

        this.state = {
            posts: [],
            blogSpot: {
                userId: 1,
                id: '',
                title: '',
                body: ''
            },
            isUpdate: false
        }
    }
    
    getAPI = () => {
        API.getAPI().then(result => {
            this.setState({
                posts: result
            });
        })
    }
    
    componentDidMount(){
        this.getAPI();
    }

    getAddBlog = (data) => {
        API.postAPI(this.state.blogSpot)
        .then(result => {
            this.getAPI();
            this.setState({
                isUpdate: false,
                blogSpot: {
                    userId: 1,
                    id: '',
                    title: '',
                    body: ''
                }
            })
        })
        // this.getAPI()
        .catch(err => console.log(err))
    }

    
    handleRemove = (data) =>{
        API.delAPI(data).then(res => {
            this.getAPI();
        })
    }

    handleUpdate = (data) => {
        this.setState({
            blogSpot: data,
            isUpdate: true
        })
    }
    
    procesUpdateData = () =>{
        API.putAPI(this.state.blogSpot, this.state.blogSpot.id)
        .then((result) => {
            this.setState({
                isUpdate: false,
                blogSpot: {
                    userId: 1,
                    id: '',
                    title: '',
                    body: ''
                },
            })
            this.getAPI();

        })
    }

    handleSubmit = (event) => {
        const blogSpotNew = {...this.state.blogSpot};
        const timeStamp = new Date().getTime();
        if(!this.state.isUpdate){
            blogSpotNew['id'] = timeStamp;
        }
        blogSpotNew[event.target.name] = event.target.value;
        this.setState({
            blogSpot: blogSpotNew
        })
        console.log(this.state.blogSpot)
    }


    handletrue = () =>{
        if(this.state.isUpdate){
            this.procesUpdateData();
                console.log('ini update');
        }else{
            this.handleAdd();
            console.log('ini post')
        }
    }

    handleAdd = () => {
        this.getAddBlog();
        this.setState({
            blogSpot: {
                userId: 1,
                id: '',
                title: '',
                body: ''
            },
        })
    }
    
    handleDetail = (id) =>{
        const history = createBrowserHistory();
        history.push(`/detailPost/${id}`);
        console.log(this.props)
    }
    render(){
        return(
                <div>
                    {/* <Routing/> */}
                    <div className="container">
                        <form action="" className="form">
                            <label htmlFor="title"></label>
                            <input type="text" value={this.state.blogSpot.title} name="title" id="title" placeholder="Ketikan title" onChange={this.handleSubmit}/>
                            <label htmlFor="body"></label>
                            <textarea type="text" value={this.state.blogSpot.body} name="body" id="body" placeholder="ketikan body" onChange={this.handleSubmit}></textarea>
                            <div className="btn">
                                <button className="btn btn-warning button" onClick={this.handletrue}>Add</button>
                            </div>
                        </form>
                    </div>
                    {
                    this.state.posts.map(post => {
                    return <Data key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>
                    })
                }
                </div>
        );
    }
}

export default Source;