import * as React from "react";
import { Link } from "react-router-dom";
import { products } from "@services/listOfProducts";
import "@styles/productPage.scss";

const ProductsPage = () => {
  return (
    <section className="productPage">
      <div className="productPage__lists">
        <h2 className="productPage__listTitle">Categorías</h2>
        <ul>
          <li className="productPage__type">Profecionales</li>
          <ul>
            <li className="productPage__subType">Perlados</li>
            <li className="productPage__subType">Standard</li>
          </ul>
          <li className="productPage__type">Cotillón</li>
          <ul>
            <li className="productPage__subType">Standard</li>
          </ul>
          <li className="productPage__type">Impresos</li>
          <ul>
            <li className="productPage__subType">Feliz Cumpleańos</li>
            <li className="productPage__subType">Con Logos</li>
            <li className="productPage__subType">Personalizados</li>
            <li className="productPage__subType">Con Diseńos</li>
          </ul>
          <li className="productPage__type">Con Formas</li>
          <ol>
            <li className="productPage__subType">De Escultura</li>
            <li className="productPage__subType">Torneados</li>
            <li className="productPage__subType">Corazon</li>
          </ol>
          <li className="productPage__type">Infladores</li>
          <ol>
            <li className="productPage__subType">Maquina de inflar</li>
            <li className="productPage__subType">De mano</li>
          </ol>
          <li className="productPage__type">Varillas</li>
          <li className="productPage__type">Gas Helio</li>
          <li className="productPage__type">piñata</li>
        </ul>
      </div>
      <div className="productPage__cards">
        <h2 className="productPage__title">Categorías</h2>
        <div className="productPage__container">
          {products.map(({ name, image, path }) => (
            <div key={name} className="productPage__items">
              <Link to={`/products/${path}`} className="productPage__link">
                <div className="productPage__img">
                  <img src={image} alt="" />
                </div>
                <h4 className="productPage__name">{name}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
