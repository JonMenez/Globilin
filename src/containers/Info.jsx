import React from "react";
import uruguay from "@icons/uruguay.svg";
import years from "@icons/40.svg";
import quality from "@icons/quality.svg";
import "@styles/info.scss";

const Info = () => {
  return (
    <section className="info">
      <h2 className="info__title">Porqué nos eligen</h2>
      <div className="info__container">
        <div className="info__card">
          <div className="info__img flag">
            <img src={uruguay} alt="Uruaguya country pais" />
          </div>
          <h3 className="info__text">
            Producción <span>nacional</span>{" "}
          </h3>
        </div>
        <div className="info__card">
          <div className="info__img">
            <img src={years} alt="años experiencia historia" />
          </div>
          <h3 className="info__text">
            Años de <span>experiencia</span>
          </h3>
        </div>
        <div className="info__card">
          <div className="info__img">
            <img src={quality} alt="calidad asegurada mejor" />
          </div>
          <h3 className="info__text">
            Garantía de <span>calidad profesional</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Info;
