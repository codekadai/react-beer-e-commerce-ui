import NavigationList from "../NavigationList/NavigationList";
import Options from "../Options/Options";
import Profile from "../Profile/Profile";
import "./Navigation.scss";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const Navigation = (props) => {
  const { type } = props;
  const navigate = useNavigate();
  return (
    <nav className="navigation">
      {type === "plp" && (
        <>
          <NavigationList />
          <Profile />
        </>
      )}
      {type === "pdp" && (
        <>
          <button
            className="navigation-left-action"
            onClick={() => navigate(-1)}
          >
            <img src="/assets/icons/arrow-back.svg" alt="" />
          </button>
          <p className="navigation-title">Detail</p>
          <Options />
        </>
      )}
    </nav>
  );
};

Navigation.propTypes = {
  type: PropTypes.string,
};

export default Navigation;
