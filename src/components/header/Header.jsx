import { useState } from "react";
import css from "./Header.module.css";
import Logo from "../../assets/loggo.png";

import { BiCart } from "react-icons/bi";

import { FaBars } from "react-icons/fa";

const Header = () => {
  const secondLang = () => {
    alert("Second language option will be added.");
  };
  const cart = () => {
    alert("Cart module is not functional.");
  };
  const search = () => {
    alert("Search module is not functional.");
  };
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <a href="#mainId">
          <img src={Logo} alt="" />
        </a>
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
          <li>
            <a href="#productsId">Products</a>
          </li>
          <li>
            <a href="#fresh">Freshest!</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li>
            <a href="#footer">Info</a>
          </li>
          <li>
            <a onClick={secondLang}>Eng/Ger</a>
          </li>
          <input
            type="text"
            className={css.search}
            placeholder="Search..."
            onClick={search}
          />
          <BiCart className={css.cart} onClick={cart} />
        </ul>
      </div>
    </div>
  );
};

export default Header;
