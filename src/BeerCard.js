import React, { Component } from 'react';
import { Link } from 'react-router';

class BeerCard extends Component {
    render(){
        return (
            
            <div data-id={this.props.beer.id} className="beer-card col-md-102" onClick={this.props.handler}><div className="inner-wrapper">
            <Link to={'/details/' + this.props.beer.id}>
                <div className="beer-image">
                    <img src={this.props.beer.image_url} alt={'image of ' + this.props.beer.name}/>
                </div>
                <div className="beer-labels">
                <h3>{this.props.beer.name}</h3>
                <div className="tag-line">
                    <p>{this.props.beer.tagline}</p>
                </div>
                </div>
            </Link></div></div>
        );
    }
}

export default BeerCard;