import React, { Component } from 'react';

class Root extends Component {
  render() {
    return (
    <div>
      <div className='container full-height'>
        {this.props.children}
      </div>
    </div>
    );
  }
}

export default Root;