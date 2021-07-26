import React from "react";
import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";
import "./Main.css"

const Main = () => {
  return (
    <>
      <TopHeader />
      <main>
        <div className="container">
          <ul className="ul-tile">
            <li>
              <Link to="/posts/feed" className="link-tile feed-tile">Feed</Link>
            </li>
            <li>
              <Link to="/posts/new" className="link-tile new-tile">New</Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Main;
