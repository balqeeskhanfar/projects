import React from "react";
import "./preloader.css";

function Preloader() {
    return (
        <section className="preloader">
            <div className="spinner">
                <span className="spinner-rotate"></span>
            </div>
        </section>
    );
}

export default Preloader;
