import React, { Component } from 'react';

class ProductListItem extends Component {

  render() {
    return (
        <div className="col col-md-2" >
          <h3>{this.props.product.name}</h3>
          <h4>{this.props.product.description}</h4>
        </div>
    );
  }
}

export default ProductListItem;
