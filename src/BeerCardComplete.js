import React, { Component } from "react"
import RelatedBeers from "./RelatedBeers"

class BeerCardComplete extends Component {
    constructor(){
        super();
        this.state = {loading: false};
    }
    
    componentDidMount = () => {
        this.setState({
            loading: true
        });
        fetch("https://api.punkapi.com/v2/beers/" + this.props.id).then(resp => {
            return resp.json();
        }).then(data => {
            this.setState({
                name: data[0].name,
                description: data[0].description,
                image_url: data[0].image_url,
                tagline: data[0].tagline,
                foods: data[0].food_pairing,
                ibu: data[0].ibu,
                abv: data[0].abv,
                ebc: data[0].ebc,
            });
            return true;
        }).then(() => {
            this.setState({loading: false});
        });
    }
    
    render(){
        return (
            <div className="component beer-card-complete">
            <div className="row">
            {this.state.loading && 
                <div className="loader">
                    <h2>Loading...</h2>
                </div>
            }
            <div className="big-image col-sm-4">
                    <img src={this.state.image_url} alt={"image of " + this.state.name}/>
            </div>
            <div className="description-container col-sm-8">
                <h3>{this.state.name}</h3>
                <div className="tag-line">
                    <p>{this.state.tagline}</p>
                </div>
                <div className="parameters-container">
                    {this.state.ibu && <div className="parameters"><span className="label">ibu:</span><span className="value">{this.state.ibu}</span></div>}
                    {this.state.abv && <div className="parameters"><span className="label">abv:</span><span className="value">{this.state.abv}</span></div>}
                    {this.state.ebc && <div className="parameters"><span className="label">ebc:</span><span className="value">{this.state.ebc}</span></div>}
                </div>
                <p>{this.state.description}</p>
                <h4>Best served with:</h4>
                <ul>
                    {this.state.foods && this.state.foods.map((food, index) => (
                        <li key={index}>{food}</li>
                    ))}
                </ul>
            </div>
            </div>
        <RelatedBeers refId={this.props.id} abv={this.state.abv} ibu={this.state.ibu} ebc={this.state.ebc}/>
            </div>
        );
    }
}

export default BeerCardComplete;