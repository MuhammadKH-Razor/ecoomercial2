import React, {Component} from 'react';
import axios from 'axios';

class Detail extends Component{

    state = {
        posts: [],
        data: new Date()
    }

    componentDidMount = () =>{
        const id = this.props.match.params.id;
        axios.get(`http://localhost:3004/posts/${id}`)
        .then(response => response)
        .then(res => {
            this.setState({
                posts: res.data
            })
        })
    }


    render(){
        const {posts} = this.state; 
        const {data} = this.state;

        return(
            <div>
                <div class="card text-center">
                    <div class="card-header">
                        {posts.id}
                    </div>
                        <div class="card-body">
                            <h5 class="card-title">{ posts.title }</h5>
                            <p class="card-text">{ posts.body }</p>
                            <a href="#" class="btn btn-secondary">Ok</a>
                        </div>
                    <div class="card-footer text-muted">
                        {new Date().toLocaleTimeString()}
                        <br/>
                        {data.getFullYear()}
                        <br/>
                        {data.getMonth()}
                        <br/>
                        {data.getDate()}
                        <br/>
                        {data.getHours()}
                        
                        {/* {new Date().getTime()} */}
                    </div>
                 </div>
            </div>
        );
    }
}

export default Detail;