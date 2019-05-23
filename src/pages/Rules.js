import React, {Component} from 'react';
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RulesList from "../components/RulesList/RulesList";

class Rules extends Component {
    constructor(props) {
        super(props);
        super.state = {showMenu: false};

        // This binding is necessary to make `this` work in the callback
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
            <div>
                <div className="hamburger-container">
                    <div className={showMenu ? "hamburger" : "hamburger open"} onClick={this.handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <Navigation
                    showMenu={showMenu}
                />
                <Header/>
                <main className={showMenu ? "main" : "main main-rotate"}>
                    <RulesList/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default Rules;