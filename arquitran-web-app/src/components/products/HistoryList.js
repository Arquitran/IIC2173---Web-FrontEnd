import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import productImg from '../../assets/product.jpg';

class HistoryList extends Component {
    constructor(props) {
        super(props);
        this.state = { historyList: null }
      }
    componentWillMount() {
        this.props.fetchHistory();
    }

    backToCategoryList() {
        this.props.history.push("/web/categories");
    }

    render() {
        const products = this.props.products.map((product, index) => {
            return (
                <div key={product.id}>
                    <Link className="card list-group-item-action"
                        to={`/web/categories/${product.category}/${product.id}`}
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
                <div className="mgtop products center-block text-center">
                <div className="card-columns">
                    {products}
                </div>

                </div>
            </div>

        )}

    }

export default HistoryList
