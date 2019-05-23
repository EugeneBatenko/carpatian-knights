import React, {Component} from 'react';
import './_news-block.scss';

class NewsBlock extends Component {
    render() {
        return (
            <div>
                <div className="news-container">
                    <h2>Новини</h2>
                    <div className="news-card">
                        <h3>У Карпатських Відчайдухів тепер свій сайт</h3>
                        <span className="date">2019-??-??</span>
                        <p>Шановне товариство, раді вам повідомити, що Карпатські Відчайдухи розшириють свою діяльність
                            і тепер у нас є власний сайт. Це не тільки модно, стильно, молодіжно, а й несе в собі мету
                            забезпечити інформативність, але й дозволить забезпечити ознайомлення з діяльністю групи не
                            тільки у фейсбуку. Та й з точки зору маркетингу та інших розумних словечків зі світу
                            економіки це забезпечить непоганий піар.</p>
                        <p>З повагою, Фирмен Пустельні Лапки</p>
                    </div>

                    <div className="news-card">
                        <h3>Заголовок</h3>
                        <span className="date">2019-??-??</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deleniti dignissimos dolorem
                            eos, eveniet, excepturi hic iure laborum odio officiis praesentium quam ratione tenetur
                            velit veniam voluptates voluptatum! Quae, voluptates.</p>
                        <p>З повагою, Фирмен Пустельні Лапки</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsBlock;