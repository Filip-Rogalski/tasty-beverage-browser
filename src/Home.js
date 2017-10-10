import React, { Component } from "react"
import BeerCard from "./BeerCard"

import "./style/index.css"

class Home extends Component {
    constructor(){
        super();
        this.state = {beers: [], scroll: 0, page: 1, endOfList: false, loading: false}
    }
    
    componentDidMount = () => {
        this.setState({
            loading: true
        });
        fetch("https://api.punkapi.com/v2/beers?page=1&per_page=20").then(resp => {
            return resp.json();
        }).then(data => {
            this.setState({
                beers: data,
                loading: false
            });
        });
        window.addEventListener("scroll", this.handleScroll);
    }
        
    handleScroll = () => {
        let windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        let  body = document.body;
        let  html = document.documentElement;
        let  docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
        let windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            let page = this.state.page + 1;
            this.setState({loading: true});
            fetch("https://api.punkapi.com/v2/beers?page=" + page + "&per_page=20").then(resp => {
                return resp.json();
            }).then(data => {
                let beers = this.state.beers;
                let updatedBeers = beers.concat(data);
                this.setState({
                    beers: updatedBeers,
                    page: page,
                    loading: false
                });
                if (data.length < 20) {
                    window.removeEventListener("scroll", this.handleScroll);
                    this.setState({endOfList: true});
                }
            });
        }
    }
    
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-6">
                    <h1>Beer<span className="dark-header">guru</span></h1>
                    </div>
                </div>
                <div className="row">
                    {this.state.beers.map(beer => (
                        <BeerCard key={beer.id} beer={beer} handler={this.showInfo}/>
                    ))}
                    {this.state.endOfList && 
                    <div className="col col-12">
                        <h1>No more beers to show :(</h1>
                    </div>}
                </div>
                {this.state.loading && <div className="loader"><h2>Loading...</h2></div>}
            </div>
        );
    }
}

export default Home;