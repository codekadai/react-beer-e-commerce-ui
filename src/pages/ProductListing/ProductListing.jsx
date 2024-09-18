import Navigation from "../../components/Navigation/Navigation";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductListing.scss";
import { useLoaderData } from "react-router-dom";

const ProductListing = () => {
  const { products } = useLoaderData();
  return (
    <main className="main-content">
      <Navigation type="plp" />
      <div className="product-listing">
        <div className="product-listing-header">
          <p className="product-listing-user-name">Hi Mr. Michael,</p>
          <h1 className="product-listing-title">Welcome Back!</h1>
        </div>
        <div className="product-listing-content">
          <h2 className="product-listing-content-title">Our Products</h2>
          <ul className="product-listing-list">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ProductListing;
