import React, { Component } from 'react';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ImageCollection extends React.Component {

  render() {
  
    return (
      <div>
          <img style={{height : '400px', width : '1150px'}} src={this.props.image}/>
      </div>
    );
  }
}

export default ImageCollection;