import React, {Component} from 'react';
import PageHeaders from "../components/PageHeaders";
import Footer from "../components/Footer";
import ActiveTours from "../components/ActiveTours";

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