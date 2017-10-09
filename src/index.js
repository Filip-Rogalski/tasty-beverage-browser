import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Root from './Root'
import Home from './Home'
import Single from './Single'
import FourOFour from './FourOFour'

import './style/index.css'

class App extends Component {
    render(){
    
        
        return (
            <Router history={browserHistory}>
              <Route path="/" component={Root}>
                <IndexRoute component={Home} />
                <Route path="/details/:id" component={Single}/>
                <Route path="/*" component={FourOFour} />
              </Route>
            </Router>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));