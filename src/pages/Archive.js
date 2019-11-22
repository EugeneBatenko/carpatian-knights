import React, {Component} from 'react';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';

class Archive extends Component {
    render() {
        return (
            <div>
                <h2>Архіваріум походів</h2>
                <FacebookProvider appId="917839448597232">
                    <EmbeddedPost href="https://www.facebook.com/carpatianknights/posts/331381744208719" width="1000" />
                </FacebookProvider>
            </div>
        );
    }
}

export default Archive;
