import React from "react";
import { Link } from "react-router-dom";
import Notifications from "./Notifications";
import "./TopHeader.css";

const TopHeader = (props) => {
  return (
    <header className="top-header">
      <span className="logo">
        <Link to="/" className="link-logo">
          Post-it
        </Link>
      </span>

      <div>
        {props.showNotifications && <Notifications />}
      </div>
    </header>
  );
};

export default TopHeader;
