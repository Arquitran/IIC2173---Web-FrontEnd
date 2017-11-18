import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import productImg from '../../assets/product.jpg';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { actualCategory: null }
  }
  componentWillMount() {
    this.props.fetchSubCategories();
  }

  handleClick(category) {
    this.props.setActualSubCategory(category.group)
    if (category.context === "MEDICAMENTOS") {
      this.props.enableBuy(false);
    } else {
      this.props.enableBuy(true);
    }
  }

  render() {
    console.log(this.props.actualCategory)
    if (!this.props.actualCategory){
      return (<h3 className="text-center mgtop">Loading...</h3>)
    }
    var className = "nav-item nav-link active";
    const categories = this.props.categories.map((category, idx) => {
      if (idx !== 0){
        className = "nav-item nav-link";
      }
      return (
        <div className={className}
              key={category}
              id="nav-home-tab"
              data-toggle="tab"
              role="tab"
              aria-expanded="true"
              onClick={() => this.props.setActualCategory(category) }>
        {category}
        </div>
      )
    })

    const subCategories = this.props.subCategories.map((category, index) => {
      if (this.props.actualCategory === category.context){
        return (
          <div key={category.id}>
            <Link className="card list-group-item-action"
                  onClick={() => this.handleClick(category)}
                  to={`/web/categories/${category.id}`}
                  style={{ textDecoration: 'none', color:'black' }}>
              <h5 className="card-header">{category.area}</h5>
              <img className="card-img-top" src={productImg} alt={category.group} />
              <div className="card-body">
                <p className="card-title">{category.group}</p>
              </div>
            </Link>
          </div>
        )
      } else {
        return true
      }

  }
    );

    return (
      <div className="mgtop products container center-block text-center">
        <div>
          <h2 className="mgbottom">Categories</h2>
        </div>

        <nav className="nav nav-tabs" id="myTab" role="tablist">
          {categories}
        </nav>

        <div className="card-columns">
          {subCategories}
        </div>

      </div>
  )}

}

export default ProductList;
