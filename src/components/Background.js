import React, {Component, Fragment} from 'react';
import './Background.css';

class Background extends Component {
    render() {
        return (
            <Fragment>
            <div id="Clouds">
                <div className="Cloud Foreground"></div>
                <div className="Cloud Background"></div>
                <div className="Cloud Foreground"></div>
                <div className="Cloud Background"></div>
                <div className="Cloud Foreground"></div>
                <div className="Cloud Background"></div>
                <div className="Cloud Background"></div>
                <div className="Cloud Foreground"></div>
                <div className="Cloud Background"></div>
                <div className="Cloud Background"></div>
            </div>

                < defs >
                < path
            id = "Cloud"
            d = "M33.85,14.388c-0.176,0-0.343,0.034-0.513,0.054c0.184-0.587,0.279-1.208,0.279-1.853c0-3.463-2.809-6.271-6.272-6.271
            c - 0.38, 0 - 0.752, 0.039 - 1.113, 0.104
            C24
            .874, 2.677, 21.293, 0, 17.083, 0
            c - 5.379, 0 - 9.739, 4.361 - 9.739, 9.738
            c0, 0.418, 0.035, 0.826, 0.084, 1.229
            c - 0.375 - 0.069 - 0.761 - 0.11 - 1.155 - 0.11
            C2
            .811, 10.856, 0, 13.665, 0, 17.126
            c0, 3.467, 2.811, 6.275, 6.272, 6.275
            c0
            .214, 0, 27.156, 0.109, 27.577, 0.109
            c2
            .519, 0, 4.56 - 2.043, 4.56 - 4.562
            C38
            .409, 16.43, 36.368, 14.388, 33.85, 14.388
            z
            "/>
                </defs>
                {this.props.children}
            </Fragment>
        );
    }
}

export default Background;