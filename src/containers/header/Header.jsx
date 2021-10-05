import React from "react";
import './header.scss';

export default function Header() {
    const main_links = [
        { href:'/catalog', title: "Волгоград" },
        { href:'/catalog', title: "8-800-550-30-30" },
        { href:'/catalog', title: "Личный кабинет" },
    ];

    const page_links = [
        { href:'/catalog', title: "О компании" },
        { href:'/catalog', title: "Усдовия доставки" },
        { href:'/catalog', title: "Пользовательское соглашение" },
    ];


    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__nav-container" >
                    <a href="/">
                        <h1>СУШИВЁСЛА</h1>
                    </a>
                </div>
                <div className="header__nav-items">
                    <ul>
                        {main_links.map(({  href, title }) => (
                            <li className="header__nav-item">
                                <a href={href}>
                                    <div className="header__nav-link">{title}</div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="header__nav-pages">
                    <ul>
                        {page_links.map(({ href, title}) => (
                            <li className="header__nav-item">
                                <a href={href}>
                                    <div className="header__nav-link">{title}</div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="header__button">
                    <button>Икринки</button>
                </div>
            </nav>
        </header>
    );
}