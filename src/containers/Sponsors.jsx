import * as React from "react";
import { brands } from "../services/listOfBrands";
import "@styles/sponsors.scss";

const Sponsors = () => {
  return (
    <section className="sponsors">
      <h2 className="sponsors__title">
        Empresas que confían en nuestro trabajo
      </h2>
      <ul className="sponsors__list">
        {brands.map(({ src, alt }) => (
          <li key={src} className="sponsors__items">
            <img src={src} alt={alt} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sponsors;
