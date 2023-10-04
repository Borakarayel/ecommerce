import css from "./Virtual.module.css";
import ReactCompareImage from "react-compare-image";
import Before from "../../assets/virtual1.jpg";
import After from "../../assets/virtual2.jpg";

const Virtual = () => {
  return (
    <div className={css.virtual}>
      <div className={css.left}>
        <span>Virtual Try-on</span>
        <span>
          We promise you the freshest products. You can see the difference on
          right side.
        </span>
        <span>See the difference!</span>
      </div>
      <div className={css.right}>
        <div className={css.wrapper}>
          <ReactCompareImage
            leftImage={Before}
            rightImage={After}
          ></ReactCompareImage>
        </div>
      </div>
      <a className="anchor" id="fresh"></a>
    </div>
  );
};

export default Virtual;
