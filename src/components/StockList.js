/**
 * StockList.js
 * @author Vivian
 * @version 1.0.0
 * copyright 2014-2016, gandxiaowei@gmail.com all rights reserved.
 */
import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * 块状Stock
 */
class BlockStockTip extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="grid-cell stock-content-vertical center">
                <div className="center">
                    <div className="stock-info stock-name">通信以及设备</div>
                    <div className="stock-info stock-index green">+10.01%</div>
                    <div className="stock-info stock-leader">长江通信</div>
                    <div className="stock-info stock-change">
                        <a>20.08</a>
                        <a>+10.03%</a>
                    </div>
                </div>
            </li>
        );
    }
}

/**
 * 条状Stock
 */
class RowStockTip extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="grid stock-content-horizontal">
                <div className="grid-cell left">
                    <div>
                        <div className="stock-name">{this.props.name}</div>
                        <div className="stock-code">{this.props.code}</div>
                    </div>
                </div>
                <div className="grid-cell stock-info stock-index right red">8.09</div>
                <div className="grid-cell stock-info stock-change right red">+10.07%</div>
            </li>
        );
    }
}

/**
 * Stock列表
 */
class StockList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                exponent: [],
                industry: [],
                notion: []
            }
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="grid tip">
                    <a>大盘指数</a>
                    <div>
                        <img src="" alt=""/>
                    </div>
                </div>
                <ul className="grid">
                    {this.state.data.exponent.map(exponent=> {
                        return <BlockStockTip stock={exponent}/>
                    })}
                </ul>

                <div className="grid tip">
                    <a>热门行业</a>
                    <div>
                        <img src="" alt=""/>
                    </div>
                </div>
                <ul className="grid">
                    {this.state.data.industry.map(industry=> {
                        return <BlockStockTip stock={industry}/>
                    })}
                </ul>

                <div className="grid tip">
                    <a>热门概念</a>
                    <div>
                        <img src="" alt=""/>
                    </div>
                </div>
                <ul className="grid">
                    {this.state.data.notion.map(notion=> {
                        return <BlockStockTip stock={notion}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default StockList;