import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchProductStock } from "../../api/productStock";
import "./ProductDetail.scss";
import Navigation from "../../components/Navigation/Navigation";

const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state;

  const [stockInfo, setStockInfo] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    const fetchStockInfo = () => {
      Promise.all(
        product.skus.map((sku) => fetchProductStock(Number(sku.code)))
      )
        .then((stockInfoArray) => {
          let stockInfoFormatted = [];
          product.skus.forEach((sku, index) => {
            stockInfoFormatted.push({ [sku.code]: stockInfoArray[index] });
          });

          setStockInfo(stockInfoFormatted);
          setSelectedSize(stockInfoFormatted[0]);
        })
        .catch((error) => {
          window.alert("Error fetching stock information:", error);
          console.error("Error fetching stock information:", error);
          setStockInfo(null);
        });
    };

    fetchStockInfo();

    const intervalId = setInterval(fetchStockInfo, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [product.id, product.skus]);

  return (
    <main className="main-content">
      <Navigation type="pdp" />
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt="" />
        </div>
        <div className="product-detail-content">
          <div className="product-detail-header">
            <div className="product-detail-title-container">
              <h1 className="product-detail-title">{product.brand}</h1>
              <p className="product-detail-price">
                ${selectedSize && Object.values(selectedSize).pop().price / 100}
              </p>
            </div>
            <div className="product-detail-specs-container">
              <p className="product-detail-origin">Origin: {product.origin}</p>
              <span>|</span>
              <p className="product-detail-stock">
                Stock: {selectedSize && Object.values(selectedSize).pop().stock}
              </p>
            </div>
          </div>

          <div className="product-detail-information-container">
            <h2 className="product-detail-subtitle">Description</h2>
            <div className="product-detail-information-text">
              <p
                className={`product-detail-information ${
                  !readMore ? `read-more` : null
                }`}
              >
                {product.information}
              </p>
              <span
                onClick={() => setReadMore(!readMore)}
                className="product-detail-read-more"
              >
                {!readMore ? `Read more` : `Read less`}
              </span>
            </div>
          </div>
          <div className="product-detail-size-container">
            <h2 className="product-detail-subtitle">Size</h2>

            {product.skus && stockInfo && (
              <div className="product-detail-pills">
                {product.skus.map((sku, index) => (
                  <span
                    key={sku.code}
                    onClick={() => setSelectedSize(stockInfo[index])}
                    className={`pill ${
                      Object.keys(selectedSize).pop() === sku.code
                        ? `pill-selected`
                        : null
                    }`}
                  >
                    {sku.name}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="product-detail-ctas">
            <button
              className="product-detail-cta product-detail-shop-now"
              onClick={() =>
                window.alert(`Buying beer ${product.id} right now!`)
              }
            >
              <img src="/assets/icons/bag.svg" alt="" />
            </button>
            <button
              className="product-detail-cta product-detail-add-to-cart"
              onClick={() =>
                window.alert(`Beer ${product.id} added to the cart`)
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
