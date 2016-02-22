/**
 * BlockStock.js
 * @author Vivian
 * @version 1.0.0
 * copyright 2014-2016, gandxiaowei@gmail.com all rights reserved.
 */
import React from 'react';

class BlockStockTip extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="grid-cell stock-content-vertical center">
                <div className="center">
                    <div className="stock-info stock-name">通信以及设备</div>
                    <div className="stock-info stock-index green">+0.77%</div>
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

export {
    BlockStockTip,
    RowStockTip
} ;