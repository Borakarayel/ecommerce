import loggo from "../../assets/loggo.png";
import css from "./Footer.module.css";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowLeftOnRectangleIcon,
  HomeModernIcon,
  LinkIcon,
} from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.cLogo}>
          <img src={loggo} alt="Logo" />
          <span> eCommerce </span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <MapPinIcon className={css.icon} />
              <span>111 NorthWest Street, Istanbul, Turkey 23575</span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a href="tel:+491771560577">+49 177 156 0577</a>
            </span>
            <span className={css.pngLine}>
              <EnvelopeIcon className={css.icon} />
              <a href="mailto: m.bora.karayel@gmail.com">
                m.bora.karayel@gmail.com
              </a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <ArrowLeftOnRectangleIcon className={css.icon} />
              <span>Sign In</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <HomeModernIcon className={css.icon} />
              <span>About Us</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <span> Terms & Conditions</span>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyRight}>
        <span>Copyright ©2023 by Bora Karayel</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
