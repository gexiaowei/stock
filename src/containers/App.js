/**
 * App.js
 * @author Vivian
 * @version 1.0.0
 * copyright 2014-2016, gandxiaowei@gmail.com all rights reserved.
 */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import StockList from '../components/StockList';
import * as CounterActions from '../actions/counter';

//将state.counter绑定到props的counter
function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions, dispatch)
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Counter)