import Count from '../../components/Count'
import {connect} from 'react-redux'
import {createIncrement, createDecrement, createAsyncIncrement} from "../../redux/count_action"

function mapStateToProps(state) {
    return {count: state}
}

function mapDispatchToProps(dispatch) {
    return {
        increment: value => dispatch(createIncrement(value)),
        decrement: value => dispatch(createDecrement(value)),
        asyncIncrement: value => dispatch(createAsyncIncrement(value, 500))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)