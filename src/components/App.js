import React from 'react';
import SearchField from './SearchField';
import GifContainer from './GifContainer';
import './../App.css';
import axios from 'axios'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        gifs: [],
        rand: ""
    }
  }

  componentDidMount(){
    this.searchGifs();
  }
  
  //API Key: 0QegizgIHwqHH4870fIotwRSzqYpbmLw
   searchGifs = (name, type) =>{
    switch (type) {
      case 0: //Search
      axios.get(`http://api.giphy.com/v1/gifs/search?q=${name}&limit=24&api_key=0QegizgIHwqHH4870fIotwRSzqYpbmLw`)
      .then(res => {this.setState({gifs: res.data.data, rand: ""}); console.log("Search")})
      .catch(err => console.log("Error"))
      break;
      case 1: //random
      axios.get(`http://api.giphy.com/v1/gifs/random?&limit=1&api_key=0QegizgIHwqHH4870fIotwRSzqYpbmLw`)
      .then(res => {this.setState({rand: res.data.data.images.original.url}); console.log("Random")})
      .catch(err => console.log("Error"))
        break;
      default: //Default trending
        axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=0QegizgIHwqHH4870fIotwRSzqYpbmLw`)
        .then(res => {this.setState({gifs: res.data.data, rand:""}); console.log("Trending")})
        .catch(err => console.log("Error"))
        break;
    }
  }



  render() {
    return (
      <div className="App">
        <div className="container">
            <a href="/">
            <img src="giphy.png" alt="giphy logo" className="logo"/>
            </a>
            <h1>Giphy Search</h1>
            <p>Find your favorite GIFs!</p>
            <SearchField searchGifs={this.searchGifs}/>
            <button onClick={()=>this.searchGifs("Hi", 1)}>Random</button>
            <div className="gifContainer">
            <GifContainer gifs = {this.state.gifs} rand={this.state.rand}/>
            </div>
            
        </div>
      </div>
    );
  }
}

export default App;
