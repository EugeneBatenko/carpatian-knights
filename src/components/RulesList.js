import React, {Component} from 'react';
import PageHeaders from "./PageHeaders";

class RulesList extends Component {
    state = {
        name: "Заповіді туриста"
    }
    render() {
        return (
            <section className="rules-container">
                <PageHeaders name={this.state.name}/>
                <ol className="rules-list">
                    <li className="list-item">Перша</li>
                    <li className="list-item">Друга</li>
                    <li className="list-item">Третя</li>
                    <li className="list-item">Четверта</li>
                    <li className="list-item">П'ята</li>
                    <li className="list-item">Шоста</li>
                    <li className="list-item">Сьома</li>
                    <li className="list-item">Восьма</li>
                    <li className="list-item">Дев'ята</li>
                    <li className="list-item">Десята</li>
                </ol>
            </section>
        );
    }
}

export default RulesList;
