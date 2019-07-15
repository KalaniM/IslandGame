import React from 'react';
import "./playBtn.css";

export class PlayBtn extends React.Component {

   render() {
        return (
            <button className="playBtn" >
            { this.props.label }
            </button> 
        )
    }
}