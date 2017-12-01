import { connect } from 'react-redux';
import { hitPing } from '../actions/pingPong';
import PingPong from '../components/pingPong';

const mapStateToProps = (state) => {
    return {
        pingMessage: state.pingPong.pingMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hitPing: (pingMessage) => { dispatch(hitPing(pingMessage)) }
    }
}

const PingPongContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PingPong)

export default PingPongContainer
