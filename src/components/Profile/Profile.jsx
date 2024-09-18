import { useState } from "react";
import Modal from "../Modal/Modal";
import "./Profile.scss";

const Profile = () => {
  const [isProfileOpen, setIProfileOpen] = useState(false);

  return (
    <>
      <div>
        <button
          className="profile-avatar"
          onClick={() => setIProfileOpen(!isProfileOpen)}
        >
          <img src="/assets/icons/avatar.jpg" alt="" />
        </button>
      </div>

      <Modal isOpen={isProfileOpen} type="profile">
        <div className="profile-close-button-container">
          <button
            className="profile-close-button"
            onClick={() => setIProfileOpen(!isProfileOpen)}
          >
            <img src="/assets/icons/arrow-back.svg" alt="" />
          </button>
        </div>
        <ul className="profile-list">
          <li
            className="profile-item"
            onClick={() => window.alert("Go to user's profile")}
          >
            My Profile
          </li>
          <hr className="divider" />
          <li
            className="profile-item"
            onClick={() => window.alert("Log out and terminate user's session")}
          >
            Log Out
          </li>
        </ul>
      </Modal>
    </>
  );
};

export default Profile;
