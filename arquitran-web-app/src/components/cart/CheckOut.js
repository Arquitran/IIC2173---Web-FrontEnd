import React, { Component } from 'react';

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = { address: '' }
  }

  handleChange(e) {
    this.setState({
      address: e.target.value
    })
    ;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitOrder(this.state.address);
    this.props.back();
  }

  render() {
    return (
      <div className="container center-block text-center mgtop">
        <button className="btn btn-outline-secondary left-btn mgbottom" onClick={this.props.back}>Back</button>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h2>Shipping Address</h2>
          <input onChange={(e) => this.handleChange(e)} type="address" className="form-control" placeholder="Enter Shipping Address"/>
          <input className="btn btn-outline-success right-btn" type="submit" value="Submit Order" />
        </form>
      </div>


    );
  }

}

export default CheckOut;
