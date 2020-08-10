import React from "react";
import Reumatology from "./Reumatology";
import Neurology from "./Neurology";
import Massage from "./Massage";
import { useParams, Link } from "react-router-dom";

import "./directions.scss"

function Directions() {
    const { direction } = useParams();

    return (
        <section className="directions">
            <div className="directions__titles">
                <p className="directions__titles_subtitle">
                    Комплексний підхід до Вашого здоров'я
                </p>
                <h3 className="directions__titles_title">Ключові напрамки</h3>
                <div className="directions__star-container">
                    <span className="directions__star-container_line"></span>
                    <img
                        className="directions__star-container_star-img"
                        src="../img/star.png"
                        alt="star"
                    />
                    <span className="directions__star-container_line"></span>
                </div>
            </div>
            <div className="directions-btns-container">
                <Link
                    to="neurology"
                    className="directions-btns-container__button"
                >
                    <img src="../img/brain.png" alt="" />
                    <span className="main-description__contacts_text">
                        Неврологія
                    </span>
                </Link>
                <span className="directions-btns-container__line"></span>
                <Link
                    to="massage"
                    className="directions-btns-container__button"
                >
                    <img src="../img/massage.png" alt="" />
                    <span className="main-description__contacts_text">
                        Масаж
                    </span>
                </Link>
                <span className="directions-btns-container__line"></span>
                <Link
                    to="reumantology"
                    className="directions-btns-container__button"
                >
                    <img  src="../img/bone.png" alt="" />
                    <span className="main-description__contacts_text">
                        Ревматологія
                    </span>
                </Link>
            </div>
            {direction === "neurology" ? <div className="left-treangle"></div> : ''}
            {direction === "massage" ? <div className="center-treangle"></div> : ''}
            {direction === "reumantology" ? <div className="right-treangle"></div> : ''}

            {direction === "neurology" ? <Neurology /> : ''}
            {direction === "massage" ? <Massage /> : ''}
            {direction === "reumantology" ? <Reumatology /> : ''}
        </section>
    );
}

export default Directions;
