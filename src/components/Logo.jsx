import * as React from "react";
import { Link } from "react-router-dom";
import logoImg from "@icons/logo.svg";
import "@styles/logo.scss";

const Logo = () => {
  return (
    <figure className="logo">
      <Link to="/">
        <img src={logoImg} alt="logo globilin" />
      </Link>
    </figure>
  );
};

export default Logo;
