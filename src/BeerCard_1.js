import React, { Component } from "react";

class BeerCard extends Component {
    render(){
        return (
            
            <div data-id={this.props.beer.id} onClick={this.props.handler}><div className="inner-wrapper">
                <div className="beer-image">
                    <img src={this.props.beer.image_url} alt={"image of " + this.props.beer.name}/>
                </div>
                <div className="beer-labels">
                <h3>{this.props.beer.name}</h3>
                <div className="tag-line">
                    <p>{this.props.beer.tagline}</p>
                </div>
                </div>
            </div></div>
        );
    }
}

export default BeerCard;