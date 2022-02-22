import * as React from "react";
import Logo from "@components/Logo";
import NavBar from "@components/NavBar";
import "@styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
