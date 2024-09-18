import { useEffect } from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import { fetchProductStock } from "../../api/productStock";
import { useState } from "react";
import { PropTypes } from "prop-types";

const ProductCard = (props) => {
  const { product } = props;

  const [defaultPrice, setDefaultPrice] = useState(0);

  const addToCart = (e) => {
    e.preventDefault();
    window.alert(`Beer ${product.id} added to cart`);
  };

  useEffect(() => {
    fetchProductStock(Number(product.skus[0].code)).then((info) => {
      setDefaultPrice(info.price);
    });
  });

  return (
    <li className="product-card-container" key={product.id}>
      <Link
        to={`/product/${product.id}-${product.brand
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
        state={{ product }}
      >
        <div className="product-card">
          <p className="product-card-title">{product.brand}</p>
          <div className="product-card-image">
            <img src={product.image} alt="" />
          </div>
          <div className="product-card-content">
            <div className="product-card-information">
              <div className="product-card-rating">
                <img src="/assets/icons/star.svg" alt="" />
                <p>{Math.ceil(Math.random() * 10) / 2}</p>
              </div>
              <p className="product-card-price">${defaultPrice / 100}</p>
            </div>
            <div className="product-card-add-to-cart">
              <button
                className="product-card-button-add-to-cart"
                onClick={addToCart}
              >
                <img src="/assets/icons/add.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
