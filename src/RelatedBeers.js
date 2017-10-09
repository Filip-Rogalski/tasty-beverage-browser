import React, { Component } from 'react'

class RelatedBeers extends Component {
    constructor(){
        super();
        this.state = {beers: []}
    }
    
    componentWillMount = () => {
        
        //Compose GET query according to passed parameters:
        
        let first = 0,
            abv = '',
            ibu = '',
            ebc = '';
        
        if (this.props.abv) {
            let abv_g = Math.max(Math.floor(this.props.abv) - 2, 0),
                abv_l = Math.floor(this.props.abv) + 3;

            first = 1;
            abv = '?abv_gt=' + abv_g + '&abv_lt=' + abv_l;
        }
        
        if (this.props.ibu) {
            let ibu_g = Math.max(Math.floor(this.props.ibu) - 20, 0),
                ibu_l = Math.floor(this.props.ibu) + 20,
                starter;
            
            if (first === 0) {
                first = 1;
                starter = '?';
            } else {
                starter = '&';
            }
            
            ibu = starter + 'ibu_gt=' + ibu_g + '&ibu_lt=' + ibu_l;
        }
        
        if (this.props.ebc) {
            let ebc_g = Math.max(Math.floor(this.props.ebc) - 10, 0),
                ebc_l = Math.floor(this.props.ebc) + 10,
                starter;   
            
            if (first === 0) {
                first = 1;
                starter = '?';
            } else {
                starter = '&';
            }
            
            ebc = starter + 'ebc_gt=' + ebc_g + '&ebc_lt=' + ebc_l;
        }
            
        fetch('https://api.punkapi.com/v2/beers' + abv + ibu + ebc).then(resp => {
            return resp.json();
        }).then(data => {
            
            let filtered = data.filter((element) => {
                return parseInt(element.id, 10) !== parseInt(this.props.refId, 10);
            })
            
            let croppedToMaxThree = filtered.slice(0, 3);
            
            this.setState({beers: croppedToMaxThree});
        });
    }
    
    render(){
        return (
            <div className="row">
            
            <div className="col-12">
                {this.state.beers.length > 0 ? <h3>You migth also like:</h3> : <h3>This beer is one of its kind! (no related beers)</h3>}
            </div>
            
                {this.state.beers && this.state.beers.map(beer => (
            <div className="related-beer col-sm-12" key={beer.id}>
            <div className="wrapper">
                <div className="beer-image">
                    <img src={beer.image_url} alt={'image of ' + beer.name}/>
                </div>
                <h3>{beer.name}</h3>
            </div>
            </div>
        ))}

            </div>
        );
    }
}

export default RelatedBeers