import React from "react";
import { BrowserRouter as Router, NavLink} from 'react-router-dom';
import './header.scss';

export default function Header() {
    const main_links = [
        { url: '/', title: "Волгоград" },
        { url: '/', title: "8-800-550-30-30" },
        { url: '/', title: "Личный кабинет" },
    ];

    const page_links = [
        { url: '/', title: "О компании"},
        { url: '/', title: "Усдовия доставки"},
        { url: '/', title: "Пользовательское соглашение"},
    ];

    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__nav-container">
                    <h1>СУШИВЁСЛА</h1>
                </div>
                <div className="header__nav-items">
                    <ul>
                        {main_links.map(({ url, title }) => (
                            <Router>
                                <li key={url} className="header__nav-item">
                                    <NavLink to={url} className="header__nav-link" activeClassName="active">{title}</NavLink>
                                </li>
                            </Router>
                        ))}
                    </ul>
                </div>
                <div className="header__nav-pages">
                    <ul>
                        {page_links.map(({ url, title}) => (
                            <Router>
                                <li key={url} className="header__nav-item">
                                    <NavLink to={url} className="header__nav-link" activeClassName="active">{title}</NavLink>
                                </li>
                            </Router>
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