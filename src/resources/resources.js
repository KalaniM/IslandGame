import React from 'react';
import './resources.css';

export class Foods extends React.Component {
    render(){
        return (
            <div className="wrapper">
                <h3>Nourriture</h3>
                <div className="itemsWrapper">
                   <Food />
                   <Food />
                   <Food />
                   <Food />
                </div>
            </div>
        )
    }
}

class Food extends React.Component {
    render() {
        return (
            <img className='food' alt=""/>
        )
    }
}