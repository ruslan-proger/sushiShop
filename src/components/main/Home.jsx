import React from "react";
import './home.scss';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="home__containers">
                    <div className="row m-0 dark clearfix" data-height-xs="500" data-height-sm="500">
                        <a href="/catalog" className="col-md-3 sushi image_fade border-right">
                            <div className="overlay">
                                <div className="text-overlay">
                                    <div className="text-overlay-title">
                                        <h3 className="editable block_78987 item item-field_title item-option_819515 item-int_751343">Сеты</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="/catalog" className="col-md-3 rolls image_fade border-right">
                            <div className="overlay">
                                <div className="text-overlay">
                                    <div className="text-overlay-title">
                                        <h3 className="editable block_78987 item item-field_title item-option_819515 item-int_1">Суши</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="/catalog" className="col-md-3 sets image_fade border-right">
                            <div className="overlay">
                                <div className="text-overlay">
                                    <div className="text-overlay-title">
                                        <h3 className="editable block_78987 item item-field_title item-option_819515 item-int_2">Роллы</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="/catalog" className="col-md-3 drinks image_fade border-right">
                            <div className="overlay">
                                <div className="text-overlay">
                                    <div className="text-overlay-title">
                                        <h3 className="editable block_78987 item item-field_title item-option_819515 item-int_3">Напитки</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}