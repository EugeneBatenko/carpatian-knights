import React, {Component} from 'react';
import './_person-block.scss';
//Img
import Chief from './Chief.jpg';
import GodOfWebSite from './GodOfWebSite.jpg';
import PythonWarior from './PythonWarior.jpg';

class PersonBlock extends Component {
    render() {
        return (
            <div className="person-block">
                <h2>Наша команда</h2>
                <div className="container">
                    <div className="card">
                        <div className="header">
                            <img src={Chief} alt="Вождь"/>
                            <div>
                                <h3>Невдоволений <strike>кіт</strike></h3>
                                <span>"Вашє пох я тут проїздом"</span>
                            </div>
                        </div>
                        <p>Капітан Пікард походу. Характер спокійний нордичний, ЧСВ на рівні секретних документів.
                            Володією заклинаннями "Пафосний спіч", "Живильні піздюді", "Сьогодні казан будеш мити ти",
                            "Ватра нескінченності". Походостійкий чувак якому вошє похуй.</p>
                    </div>
                    <div className="card">
                        <div className="header">
                            <img src={GodOfWebSite} alt="БогЦьогоСайту"/>
                            <div>
                                <h3>EL BATO</h3>
                                <span>"Хєрня переробляй"</span>
                            </div>
                        </div>
                        <p>Бог цього сайту, наговнокодив цей красивий шматок ХиТиМиЛю. Характер нестабільний, залежить
                            від того скільки у вас помідорів так коміксів про Бетмена. ЧСВ розміром з пустелю, в яку
                            любить час від часу зникати. Обер-лейтенант походу, лише чекає розстрільного наказу від
                            Походостійкого чувака. Кодіє тунель... постійно...</p>
                    </div>
                    <div className="card">
                        <div className="header">
                            <img src={PythonWarior} alt="Саня"/>
                            <div>
                                <h3>Корінь змієборець</h3>
                                <span>"Шо?"</span>
                            </div>
                        </div>
                        <p>Містер незворушність, гуморист походу. ЧСВ віддав пітону на зберігання. Характер
                            екстравагантний, сама доброта та няшність. Знає всі жарти ЗІЛ та акумулятори. Може зробити
                            батарейку з картоплі, яку Походостійкий чувак сказав почитисти ноунейму розстріляного тим,
                            що кодіє тунель.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonBlock;