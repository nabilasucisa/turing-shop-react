import {
  IconHeart,
  IconHeartFilled,
  IconShoppingCart,
} from "@tabler/icons-react";
import React, { Component } from "react";
import PropTypes from "prop-types";

class ItemProduct extends Component {
  state = {
    count: 0,
    isSaved: false,
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  handleChangeSaved = () => {
    this.setState(
      {
        isSaved: !this.state.isSaved,
      },
      () => {
        this.props.changeSavedCount(this.setState.isSaved === true ? 1 : -1);
      }
    );
  };

  // React Lifecycle
  constructor(props) {
    super(props);
    console.log("Called from constructor");
  }

  componentDidMount() {
    console.log("Called from componentDidMount");
  }

  componentDidUpdate() {
    console.log("Called from componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Called from componentWillUnmount");
  }

  render() {
    console.log("Called from render");
    const { image, title, price } = this.props;

    return (
      <div className="card shadow-sm h-100">
        <img
          src={image}
          alt={title}
          className="card-img-top h-50 object-fit-contain"
        />
        <div className="card-body">
          <h5 className="card-title fw-light">{title}</h5>
          <p className="fw-bold">Rp. {price}</p>
        </div>
        <div className="d-flex justify-content-between p-2">
          <div className="d-flex align-items-center justify-content-start column-gap-4">
            {this.state.count === 0 ? (
              <button
                className="d-flex align-items-center column-gap-2 btn btn-primary"
                onClick={this.handleIncrement}
              >
                <IconShoppingCart /> Tambah Keranjang
              </button>
            ) : (
              <>
                <button
                  className="btn btn-primary"
                  onClick={this.handleDecrement}
                >
                  -
                </button>
                <span>{this.state.count}</span>
                <button
                  className="btn btn-primary"
                  onClick={this.handleIncrement}
                >
                  +
                </button>
              </>
            )}
          </div>
          <button onClick={this.handleChangeSaved} className="btn btn-link">
            <i>{this.state.isSaved ? <IconHeartFilled /> : <IconHeart />}</i>
          </button>
        </div>
      </div>
    );
  }
}

export default ItemProduct;

ItemProduct.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  changeSavedCount: PropTypes.func.isRequired,
};
