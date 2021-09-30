import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import Social from "../SocialTwo";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div className="shane_tm_topbar">
        <div className={navbar ? "topbar_inner opened" : "topbar_inner"}>
          <div className="logo">
            <NavLink to="#about">
              <img src="/img/logo/new/binary-code.png" width="" alt="partners brand" />
            </NavLink>
          </div>
          {/* End logo */}
          <div className="menu">
            <Scrollspy
              className="anchor_nav"
              items={["home", "about", "portfolio", "contact"]}
              currentClassName="current"
              offset={-200}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </Scrollspy>
          </div>
          {/* End menu */}
        </div>
      </div>
      {/* End shane_tm_topbar */}

      {/* Start shane mobile menu */}
      <div className="shane_tm_mobile_menu">
        <div className="topbar_inner">
          <div className="container bigger">
            <div className="topbar_in">
              <div className="logo">
                <NavLink to="/">
                  <img src="/img/logo/new/binary-code.png" alt="partners brand" />
                </NavLink>
              </div>
              {/* End logo */}
              <div className="my_trigger" onClick={handleClick}>
                <div
                  className={
                    click
                      ? "hamburger hamburger--collapse-r is-active"
                      : "hamburger"
                  }
                >
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
                {/* End hamburger menu */}
              </div>
            </div>
          </div>
        </div>
        <div className={click ? "dropdown active" : "dropdown"}>
          <div className="container">
            <span className="close_menu" onClick={handleClick}>
              close
            </span>
            <div className="dropdown_inner">
              <ul className="anchor_nav">
                <li className="current">
                  <a href="#home" onClick={handleClick}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={handleClick}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#portfolio" onClick={handleClick}>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={handleClick}>
                    Contact
                  </a>
                </li>
                <li>
                </li>
              </ul>
              <div className="social-menu">
                <Social />
              </div>
              {/* End social share */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
      {/* End shane mobile menu */}
    </>
  );
};

export default Header;
