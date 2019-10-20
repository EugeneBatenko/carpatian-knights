import React, {Component} from 'react';
import PageHeaders from "../components/PageHeaders/PageHeaders";
import Footer from "../components/Footer/Footer";
import ActiveTours from "../components/ActiveTours/ActiveTours";

class Tours extends Component {

    state = {
        name: "Активні походи"
    };

    render() {
        return (
            <main>
                <PageHeaders name={this.state.name}/>
                <ActiveTours/>
                <Footer/>
            </main>
        );
    }
}

export default Tours;