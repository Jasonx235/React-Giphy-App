import React from 'react';



class SearchField extends React.Component {

    state = {
        search: "",
        isEmpty: true
    }

    onSubmit = (e) =>{
        e.preventDefault();
     
        if(this.state.search === ""){
            this.setState({isEmpty: true});
            this.props.searchGifs(this.state.search);
        }
        else{
             this.setState({isEmpty: false});
             this.props.searchGifs(this.state.search, 0);
        }
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value,  isEmpty: true});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input type='text' name="search" value={this.state.search} onChange={this.onChange} placeholder={this.state.isEmpty ? "Search..." : this.state.search}/>
                <input type='submit' value="submit"/>
                </form>
                
            </div>
        )
    }
}


export default SearchField;