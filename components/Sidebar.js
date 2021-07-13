import React from "react";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <a href="#" className="side-nav__link">
            <span>Rooms</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <span>Services</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <span>Car rental</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <span>Tours</span>
          </a>
        </li>
      </ul>

      <div className="legal">
        &copy; 2021 by Traveller. All rights reserved.
      </div>
    </nav>
  );
};

export default Sidebar;
