import React from "react";

import "./header.scss"

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="../img/header-logo.png" alt="header-logo"/>
            <div className="header__description">
                <span className="header__description_item">Переваги</span>
                <span className="header__description_item">Ціни</span>
                <span className="header__description_item">Лікування</span>
                <span className="header__description_item">Контакти</span>
            </div>
            <button className="header__sign-btn">Записатись на прийом</button>
        </div>
    );
}

export default Header;