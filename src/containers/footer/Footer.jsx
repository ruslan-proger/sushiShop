import React from "react";
import './footer.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__container">
                    <div className="footer__navbar">
                        <div className="footer__navbar-social">
                            <a href="#">
                                <img src="https://img.icons8.com/material-rounded/24/000000/facebook-f--v1.png"/>
                            </a>
                            <a href="#">
                                <img src="https://img.icons8.com/material-sharp/24/000000/vk-com.png"/>
                            </a>
                            <a href="#">
                                <img src="https://img.icons8.com/material-rounded/24/000000/instagram-new.png"/>
                            </a>
                            <a href="#">
                                <img src="https://img.icons8.com/material-rounded/24/000000/telegram-app.png"/>
                            </a>
                            <a href="#">
                                <img src="https://img.icons8.com/material/24/000000/tiktok.png"/>
                            </a>
                        </div>
                        <div className="footer__navbar-gps">
                            <img src="https://img.icons8.com/material-rounded/24/000000/previous--location.png"/>
                            <p>Ближайшие СушиВесла</p>
                        </div>
                        <div className="footer__navbar-content">
                            <a href="/catalog">Акции</a>
                            <a href="/catalog">Франшиза</a>
                            <a href="/catalog">Вакансии</a>
                            <a href="/catalog">Отзывы</a>
                            <a href="/catalog">Политика обработки персональных данных</a>
                        </div>
                        <div className="footer__navbar-visa">
                            <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/master-card.svg" alt="" />
                            <img src="https://xn--80adjkr6adm9b.xn--p1ai/static/sv/img/visa.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}