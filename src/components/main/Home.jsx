import React from "react";
import './home.scss';
import Data from './main.json';
import {useHistory} from "react-router-dom";

export default function Home() {
    const history = useHistory();

    const handleClick = () => {
        history.push("/catalog");
    }

    return (
        <div className="home">
            <div className="home__containers">
                <article className="home__containers-first">
                    {Data.map(({src, title, image}) => (
                       <div className="home__containers-card" onClick={handleClick}>
                           <div className="home__containers-card-image">
                               <img src={src}  />
                               <img src={image} />
                           </div>
                           <span>{title}</span>
                       </div>
                    ))}
                </article>
            </div>
        </div>
    );
}