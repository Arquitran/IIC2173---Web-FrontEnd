import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import productImg from '../../assets/product.jpg';

class ProductList extends Component {
  componentWillMount() {
    this.props.fetchProducts(parseInt(this.props.match.params.idSubCategory, 10));
  }

  backToCategoryList() {
    this.props.history.push("/web/categories");
  }

  render() {
    if (!this.props.actualSubCategory){
      return (<h3 className="text-center mgtop">Loading...</h3>)
    }

    const products = this.props.products.map((product, index) => {
        return (
          <div key={product.id}>
            <Link className="card list-group-item-action"
                  to={`/web/categories/${this.props.match.params.idSubCategory}/${product.id}`}
                  style={{ textDecoration: 'none', color:'black' }}>
              <h5 className="card-header">{product.name}</h5>
              <img className="card-img-top" src={productImg} alt={product.name} />
              <div className="card-body">
                <p className="card-title">${product.price}</p>
              </div>
            </Link>
          </div>
        )
      }
    );

    return (
      <div className="container">
        <button className="mgtop btn btn-outline-secondary"
                onClick={() => this.backToCategoryList()}>Back</button>
        <div className="mgtop products center-block text-center">
          <div>
            <h2 className="mgbottom">{this.props.actualSubCategory}</h2>
          </div>

          <div className="card-columns">
            {products}
          </div>

        </div>
      </div>

  )}

}

export default ProductList;
