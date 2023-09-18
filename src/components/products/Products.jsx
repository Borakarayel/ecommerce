import css from "./Products.module.css";
import plane from "../../assets/plane.png";
import { ProductData } from "../../data/product";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = () => {
  const [parent] = useAutoAnimate();

  const [MenuProducts, setMenuproducts] = useState(ProductData);

  const filter = (type) => {
    setMenuproducts(ProductData.filter((item) => item.type === type));
  };

  const filterSale = (sale) => {
    setMenuproducts(ProductData.filter((item) => item.sale === true));
  };

  return (
    <div className={css.container}>
      <img src={plane} alt="" />
      <h1>Our Featured Products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuproducts(ProductData)}>All</li>
          <li onClick={() => filter("fruit")}>Fruits</li>
          <li onClick={() => filter("veggie")}>Veggies</li>
          <li onClick={() => filterSale("sale")}>Sale</li>
        </ul>

        <div className={css.list} ref={parent}>
          {MenuProducts.map((product, i) => (
            <div className={css.product}>
              <div className="leftS">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price} €</span>
                <div>Show Now</div>
              </div>
              <img src={product.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
