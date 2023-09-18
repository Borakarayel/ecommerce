import React, { useState } from "react";
import css from "./Header.module.css";
import Logo from "../../assets/loggo.png";

import { BiCart } from "react-icons/bi";

import { FaBars } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>eCommerce</span>
      </div>
      <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <FaBars />
        </div>

        <ul
          className={css.menu}
          style={{ display: showMenu ? "none" : "inherit" }}
        >
          <li>Collections</li>
          <li>Brands</li>
          <li>New </li>
          <li>Sales </li>
          <li>Ger/Eng</li>
        </ul>
        <input type="text" className={css.search} placeholder="Search..." />
        <BiCart className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
