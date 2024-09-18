import { useState } from "react";
import Modal from "../Modal/Modal";
import "./Options.scss";

const Options = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  return (
    <>
      <div>
        <button
          className="options-open-button"
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        >
          <img src="/assets/icons/more-options.svg" alt="" />
        </button>
      </div>

      <Modal isOpen={isOptionsOpen} type="options">
        <div className="options-close-button-container">
          <button
            className="options-close-button"
            onClick={() => setIsOptionsOpen(!isOptionsOpen)}
          >
            <img src="/assets/icons/arrow-back.svg" alt="" />
          </button>
        </div>
        <ul className="options-list">
          <li
            className="options-item"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            {isFavorite ? "Remove from favorites" : "Add to favorites"}
          </li>
          <li
            className="options-item"
            onClick={() => setIsInWishlist(!isInWishlist)}
          >
            {isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          </li>
        </ul>
      </Modal>
    </>
  );
};

export default Options;
