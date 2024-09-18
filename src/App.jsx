import { Link } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <main className="main-content homepage">
      <Navigation type="plp" />

      <div className="home-cta">
        <img src="/assets/icons/beer.png" alt="" />
        <h1 className="home-title">Beer-commerce</h1>
        <Link to={`/products`} className="home-action">
          See all beers!
        </Link>
      </div>
    </main>
  );
};

export default App;
