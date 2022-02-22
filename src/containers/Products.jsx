import * as React from "react";
import Button from "@components/Button";
import productExample from "@images/product.jpeg";
import "@styles/products.scss";

const Products = () => {
  return (
    <section className="products">
      <h2 className="products__title">Nuestros productos</h2>
      <div className="products__container">
        <div className="products__items">
          <a href="" className="products__link">
            <div className="products__img">
              <img src={productExample} alt="" />
            </div>
            <h4 className="products__name">Product 1</h4>
          </a>
        </div>
        <div className="products__items">
          <a href="" className="products__link">
            <div className="products__img">
              <img src={productExample} alt="" />
            </div>
            <h4 className="products__name">Product 2</h4>
          </a>
        </div>
        <div className="products__items">
          <a href="" className="products__link">
            <div className="products__img">
              <img src={productExample} alt="" />
            </div>
            <h4 className="products__name">Product 3</h4>
          </a>
        </div>
        <div className="products__items">
          <a href="" className="products__link">
            <div className="products__img">
              <img src={productExample} alt="" />
            </div>
            <h4 className="products__name">Product 4</h4>
          </a>
        </div>
        <div className="products__items">
          <a href="" className="products__link">
            <div className="products__img">
              <img src={productExample} alt="" />
            </div>
            <h4 className="products__name">Product 5</h4>
          </a>
        </div>
        <div className="products__items">
          <a href="" className="products__link">
            <div className="products__img">
              <img src={productExample} alt="" />
            </div>
            <h4 className="products__name">Product 6</h4>
          </a>
        </div>
      </div>
      <Button textContent="Ver todo" style={"products__button"} />
    </section>
  );
};

export default Products;
