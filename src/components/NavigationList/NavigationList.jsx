import { useState } from "react";
import Modal from "../Modal/Modal";
import "./NavigationList.scss";
import { Link } from "react-router-dom";

const NavigationList = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        className="navigation-open-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img src="/assets/icons/menu.svg" alt="" />
      </button>
      <Modal isOpen={isMenuOpen} type="navigation">
        <div className="navigation-close-menu-container">
          <button
            className="navigation-close-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src="/assets/icons/arrow-back.svg" alt="" />
          </button>
        </div>
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link to={`/`}>Home</Link>
          </li>
          <li className="navigation-item">
            <Link to={`/products`}>Products</Link>
          </li>
        </ul>
      </Modal>
    </>
  );
};

export default NavigationList;
