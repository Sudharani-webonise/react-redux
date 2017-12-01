import React from 'react';
export default class PingPong extends React.Component {

    constructor(props) {
        super(props)
        this.hitPing = this.hitPing.bind(this);
    }

    hitPing() {
        this.props.hitPing('PONG')
    }

    render() {
        return (
            <div>
                <button onClick={this.hitPing} > PING </button>
                <div>{this.props.pingMessage}</div>
            </div>
        )
    }
}
