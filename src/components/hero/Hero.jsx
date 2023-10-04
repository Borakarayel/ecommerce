import css from "./Hero.module.css";
import { BiRightArrowCircle, BiShoppingBag } from "react-icons/bi";
import heroImg from "../../assets/ShoppingCart.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 2, type: "spring" };
  const SignUp = () => {
    alert("Sign up module is not functional.");
  };
  return (
    <div className={css.container}>
      {/*Left Side*/}
      <div className={css.h_sides}>
        <span className={css.text1}>Fresh Products</span>
        <div className={css.text2}>
          <span>Cheap Prices</span>
          <span> </span>
          <span>You can find the cheapest prices! And the cheapest only!</span>
        </div>
      </div>
      {/*Middle Side*/}
      <div className={css.wrapper}>
        {/* Big Orange Circle */}
        <motion.div
          initial={{ bottom: "5rem" }}
          whileInView={{ bottom: ".5rem" }}
          transition={transition}
          className={css.orangeCircle}
        >
          <motion.img
            initial={{ right: "1rem" }}
            whileInView={{ right: "10rem" }}
            transition={transition}
            src={heroImg}
            alt=""
          />
        </motion.div>
        {/* Woman with cart */}

        {/* Sign in Box */}
        <motion.div
          initial={{ bottom: "5rem" }}
          whileInView={{ bottom: ".5rem" }}
          className={css.cart2}
        >
          <BiShoppingBag />
          <div className={css.signup} onClick={SignUp}>
            <span>Best Signup Offers</span>

            <BiRightArrowCircle />
          </div>
        </motion.div>
      </div>
      {/*Right Side*/}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.2m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customer</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
