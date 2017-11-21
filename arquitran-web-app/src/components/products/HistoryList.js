import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import productImg from '../../assets/product.jpg';

class HistoryList extends Component {
    constructor(props) {
        super(props);
        this.state = { historyList: null }
      }
    componentWillMount() {
      if (!localStorage.getItem("logged_in")){
        this.props.history.push('/web/signin');
      }
      this.props.fetchHistory();
      this.props.fetchProducts(-1);
    }

    render() {
      if (!this.props.products || !this.props.historyList) {
        return (<h1>loading</h1>)
      }
      console.log(this.props.historyList);
        const products = this.props.products.map((product, index) => {
          for (var i = 0; i < this.props.historyList.length; i++) {
            if (this.props.historyList[i].product === product.id ){
              return (
                  <div key={product.id}>
                      <h5 className="card-header">{product.name}</h5>
                      <img className="card-img-top" src={productImg} alt={product.name} />
                      <div className="card-body">
                          <p className="card-title">Transaction Date: {this.props.historyList[i].createdAt.split("T")[0]}</p>
                          <p className="card-title">Amount: {this.props.historyList[i].amount}</p>
                          <p className="card-title">${product.price}</p>
                      </div>
                  </div>
                  )
            }
          }

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
