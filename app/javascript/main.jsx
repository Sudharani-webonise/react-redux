import React from 'react';
import Home from './components/home';
import PingPong from './containers/pingPongContainer';
import { Link } from 'react-router';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>welcome!!!</h1>
                <Link to='/home' > <span> Go Home </span></Link>
            </div>
        )
    }
}
