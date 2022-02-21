import * as React from "react";
import logoImg from "@icons/logo.svg";
import "@styles/logo.scss";

const Logo = () => {
  return (
    <figure className="logo">
      <img src={logoImg} alt="logo globilin" />
    </figure>
  );
};

export default Logo;
