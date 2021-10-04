import React from "react";
import catalog from "./catalog.json";
import "./catalog.scss";

export default function Catalog() {
    return (
        <div className="catalog">
            {catalog.map(({src, title, price, description, size}) => (
                <div className="catalog__card">
                    <img src={src} />
                    <div className="catalog__card-description">
                        <div className="catalog__card-description-text">{title}</div>
                        <div className="catalog__card-description-desc">{description}</div>
                        <div className="catalog__card-description-size">{size}</div>
                        <div className="catalog__card-description-price-block">
                            <div className="catalog__card-description-price">{price}</div>
                            <button>в корзину</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}