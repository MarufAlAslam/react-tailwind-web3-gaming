import React from "react";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { FaArrowRight, FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <header className="header pt-[30px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-[40px]">
            <Link to="/" className="logo">
              <img src={logo} alt="logo" />
            </Link>
            <Link to={`/`} className="nav-link text-white">
              Playrooms
            </Link>
            <Link to={`/`} className="nav-link text-white">
              Tokenomics
            </Link>
          </div>
          <div className="flex justify-end items-center gap-[24px]">
            <Link to="/" className="text-white nav-link text-xl">
              <FaDiscord />
            </Link>
            <Link to={`/`} className="nav-link text-white">
              <FaXTwitter />
            </Link>
            <Link to={`/`} className="nav-link text-white">
              <FaTelegramPlane />
            </Link>
            <Link
              to={`/`}
              className="nav-link text-white grad-btn flex justify-center items-center gap-1 py-[8px] px-[12px]"
            >
              <span>Whitepaper</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
