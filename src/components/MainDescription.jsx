import React from "react";

import "./main-description.scss"

function MainDescription() {
    return (
        <section className="main-description">
            <img
                className="main-description__background-img"
                src="../img/main-description.png"
                alt=""
            />
            <div className="main-description__description">
                <div className="main-description__description_title">
                    ПОВНИЙ КОМПЛЕКС МЕДИЧНИХ ПОСЛУГ
                </div>
                <div className="main-description__description_description">
                    Європейські стандарти медичної допомоги
                </div>
                <button className="main-description__description_btn">
                    ПРО КЛІНІКУ
                </button>
            </div>
            <div className="main-description__contacts">
                <span className="main-description__contacts_text">м. Київ, вул. Еленівська, 8</span>
                <span className="main-description__contacts_line"></span>
                <span className="main-description__contacts_text">(095) 222 22 22 <br/> (068) 222 22 22 <br/> (063) 222 22 22</span>
                <span className="main-description__contacts_line"></span>
                <span className="main-description__contacts_text">info@clinic.com</span>
            </div>
        </section>
    );
}

export default MainDescription;
