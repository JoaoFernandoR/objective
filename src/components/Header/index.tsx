import React from "react";
import { GiGamepadCross } from "react-icons/gi";

import "./Header.scss";

import Profile from "../../assets/profile.jpg";

const Header = ({ handleTheme }: any) => {
  return (
    <section id="header">
      <div className="header">
        <GiGamepadCross size="2.5rem" className="icon" />
        <div className="user_view">
          <div className="user_info">
            <h4> João Fernando </h4>
            <h6> Teste de Front-end </h6>
          </div>
          <img src={Profile} alt="Usuário" />
          <label className="switch">
            <input
              type="checkbox"
              defaultChecked={true}
              onChange={handleTheme}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </section>
  );
};

export default Header;
