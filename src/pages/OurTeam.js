import React, {Component} from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PersonBlock from "../components/PersonBlock/PersonBlock";

class OurTeam extends Component {

    render() {
        return (
            <div>
                <Header/>
                <main>
                    <PersonBlock/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default OurTeam;