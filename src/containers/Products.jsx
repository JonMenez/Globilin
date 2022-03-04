import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@components/Button";
import { products } from "../services/listOfProducts";
import productExample from "@images/product.jpeg";
import "@styles/products.scss";

const Products = () => {
  const navigate = useNavigate();

  const toProducts = () => navigate("/products");

  return (
    <section className="products">
      <h2 className="products__title">Nuestros productos</h2>
      <div className="products__container">
        {products.map(
          ({ name, image, path }, index) =>
            index < 6 && (
              <div key={name} className="products__items">
                <Link to={`/products/${path}`} className="products__link">
                  <div className="products__img">
                    <img src={image} alt="" />
                  </div>
                  <h4 className="products__name">{name}</h4>
                </Link>
              </div>
            )
        )}
      </div>
      <Button
        textContent="Ver todo"
        style={"products__button"}
        click={toProducts}
      />
    </section>
  );
};

export default Products;
