import React, {Component} from 'react';
import NewsBlock from "../components/NewsBlock";
import Footer from "../components/Footer";
import PageHeaders from "../components/PageHeaders";


class News extends Component {

    state = {
        name: "Новини"
    };

    render() {
        return (
            <div>
                <main>
                    <PageHeaders name={this.state.name}/>
                    <NewsBlock/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default News;
