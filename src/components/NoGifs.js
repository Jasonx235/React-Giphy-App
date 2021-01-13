import React, { Component } from 'react'

class NoGifs extends Component {
    render() {
        return (
            <div className="noGif">
                <p>No Gifs Found!</p>
                <img src="nonfound.gif" className="myGif" alt="gif"/>
            </div>
        )
    }
}
export default NoGifs
