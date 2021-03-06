import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Axios from 'axios';

class Search extends Component{
    state = {
        searchText: 'a',
        amount: 15,
        apiUrl: 'https://pixabay.com/api/',
        apiKey: '17640270-16b1c6f2f75ca7c2cf18ed865',
        images: []
    };

    onTextChange = e=> {
        this.setState({ [e.target.name]: e.target.value}, ()=> {
            Axios.get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=
                 ${this.state.searchText}&image_type=photo&per_page=
                 ${this.state.amount}&safesearch=true`
                )
            .then(res => this.setState({ images: res.data.hits }))
            .catch(err => console.log(err));
        });
    };  

    render(){
        console.log(this.state.images);
        return(
            <div className="menu">
                 <TextField 
                    name = "Images Finder By Pixabay"
                    value = {this.state.searchText}
                    onChange = {this.onTextChange}
                    floatingLabelText = "Search for Images"
                    fullWidth = {false}
                 />
                <br/>
                 <SelectField
                    floatingLabelText = "Amount"
                    value = {this.state.amount}
                    onChange = {this.onAmountChange}
                 className="opsi">
                    <MenuItem value = {5} primaryText = "5" /> 
                    <MenuItem value = {10} primaryText = "10" /> 
                    <MenuItem value = {15} primaryText = "15" /> 
                    <MenuItem value = {30} primaryText = "30" /> 
                    <MenuItem value = {50} primaryText = "50" /> 
                </SelectField>
            </div>
        );
    }
}

export default Search;