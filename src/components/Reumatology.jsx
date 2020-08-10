import React from "react";

import "./direction.scss"

function Reumatology() {
    return (
        <>
            <section className="direction">
            <img className="direction__background" src="../img/reumatology-background.png" alt="asd"/>
                <div className="direction__description-container">
                    <h3 className="direction__description-container_title">
                        ревматологія
                    </h3>
                    <p className="direction__description-container_description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. <br />
                        <br /> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                    <button className="direction__description-container_btn">
                        Деталі
                    </button>
                </div>
                <img className="direction__image" src="../img/reumatology.png" alt="" />
            </section>
        </>
    );
}

export default Reumatology;
