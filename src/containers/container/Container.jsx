import React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "../../components/main/Home";
import Catalog from "../../components/catalog/Catalog";
import "./container.scss";

export default function Container() {
    return (
        <main className="main">
            <div className="main__container container">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/catalog" component={Catalog} />
                    </Switch>
                </Router>
            </div>
        </main>
    );
}