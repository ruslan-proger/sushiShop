import React from "react";
import './catalog.scss';
import axios from "axios";

export default class Catalog extends React.Component {
    state = {
        catalog: []
    }

    async componentDidMount() {
        const responce = await axios.get('http://localhost:3001/catalog');
        const catalog = responce.data;
        this.setState({ catalog });
    }

    render() {
        return(
            <div className="catalog">
                {this.state.catalog.map(catalog => (
                    <div className="catalog__card">
                        <img src={catalog.src} alt="" />
                        <div className="catalog__card-description">
                        <div className="catalog__card-description-text">{catalog.title}</div>
                        <div className="catalog__card-description-desc">{catalog.description}</div>
                        <div className="catalog__card-description-size">{catalog.size}</div>
                        <div className="catalog__card-description-price-block">
                            <div className="catalog__card-description-price">{catalog.price}</div>
                            <button>в корзину</button>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        );
    }
}