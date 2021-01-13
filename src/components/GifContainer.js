import React, { Component } from 'react'
import GifCard from './GifCard';
import NoGifs from './NoGifs'


class GifContainer extends Component {

    showGifs = () =>{
        let result = this.props.gifs;
        let gif

        if(this.props.rand !== ""){
             gif = <GifCard url={this.props.rand} key={1}/>
            return gif;
        }
        
        if(result.length > 0){
            gif = result.map(gif =>(
                <GifCard url={gif.images.fixed_height.url} key={gif.id}/>
            ))
        }
        else{
           gif = <NoGifs />
        }
        return gif;
    }

    render() {
        return( 
                this.showGifs()
            ); 
    }
            
        
}

export default GifContainer;