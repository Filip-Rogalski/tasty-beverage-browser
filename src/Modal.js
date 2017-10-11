import React, { Component } from "react";
import BeerCardComplete from "./BeerCardComplete"

class Modal extends Component {
    render(){
        return (
            <div className="modal" onClick={this.props.hideModal}>
                <div className="modal-wrapper">
                    <div className="container">
                        <BeerCardComplete id={this.props.modalRef}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;