import * as React from "react";
import Button from "@components/Button";
import { useNavigate } from "react-router-dom";
import hero from "@images/hero.png";
import "@styles/hero.scss";

const Hero = () => {
  const navigate = useNavigate();

  const toContact = () => navigate("/contact");

  return (
    <main className="hero">
      <section className="hero__container">
        <div className="hero__text">
          <h1 className="hero__title">
            Porque en todos los momentos lindos siempre hay globos
          </h1>
          <p className="hero__body">
            Y nosotros tenemos todo lo que necesitás para que tu momento sea aún
            más especial
          </p>
          <Button
            style="hero__button"
            textContent="Contacto"
            click={toContact}
          />
        </div>
        <div className="hero__img">
          <img src={hero} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Hero;
