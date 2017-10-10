import React, { Component } from "react";
import BeerCardComplete from "./BeerCardComplete";
import FourOFour from "./FourOFour";

class Single extends Component {
    render(){
        if (this.props.params.id > 0 && this.props.params.id < 235) {
            return <BeerCardComplete id={this.props.params.id}/>;
        } else {
            return <FourOFour />;
        }
        
    }
}

export default Single;