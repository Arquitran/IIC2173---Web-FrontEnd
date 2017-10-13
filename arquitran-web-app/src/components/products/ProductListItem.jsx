import React, { Component } from 'react';
import NavLink from "../NavLink";

class ProductListItem extends Component {

  render() {
    return (
      <NavLink to={'/products/' +  this.props.product.id} >
        <div className="col col-md-2" >
          <h4>{this.props.product.name}</h4>
          <h5>{this.props.product.description}</h5>
        </div>
      </NavLink>
    );
  }
}

export default ProductListItem;
