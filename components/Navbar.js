import React from "react";
import Image from "next/image";
import { FaRocketchat, FaBookmark, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="header">
      {/* Logo  */}
      <div className="logo">
        <Image
          src="https://res.cloudinary.com/dev-rajan/image/upload/v1626012495/Hotel-Management-App/logo_c47gq3.png"
          alt="logo"
          height="30px"
          width="30px"
          className="logo"
        />
      </div>

      {/* Search Box */}
      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search hotels"
        />
        <button className="search__button">
          <FaSearch />
        </button>
      </form>

      {/* User Navigation Section */}
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <FaBookmark className="user-nav__icon" />
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <FaRocketchat className="user-nav__icon" />
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
          <Image
            src="https://res.cloudinary.com/dev-rajan/image/upload/v1626013030/Hotel-Management-App/100_skq9we.jpg"
            alt="User photo"
            height="30px"
            width="30px"
            className="user-nav__user-photo"
          />
          <span className="user-nav__user-name">Jonas</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
