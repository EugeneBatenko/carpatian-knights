import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './scss/main.scss';
//Component
import Navigation from "./components/Navigation";
//Pages
import MainPage from "./pages/MainPage";
import News from "./pages/News";
import Rules from "./pages/Rules";
import Archive from "./pages/Archive";
import OurTeam from "./pages/OurTeam";
import Crusade from "./components/Crusade";
import Tours from "./pages/Tours";


class App extends Component {

    constructor(props) {
        super(props);
        super.state = {showMenu: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        super.setState(state => ({
            showMenu: !state.showMenu,
        }));
    }


    render() {

        const {showMenu} = this.state;

        return (
            <div className="App">
                <div className="hamburger-container">
                    <div className={showMenu ? "hamburger" : "hamburger open"} onClick={this.handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <Router>
                    <Navigation
                        showMenu={showMenu}
                    />
                    <div className={showMenu ? "main" : "main main-rotate"}>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/News" component={News}/>
                        <Route exact path="/OurTeam" component={OurTeam}/>
                        <Route exact path="/Rules" component={Rules}/>
                        <Route exact path="/Archive" component={Archive}/>
                        <Route exact path="/Tours" component={Tours}/>
                        <Route exact path="/Crusade" component={Crusade}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
