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
            <li class="grid-cell stock-content-vertical center">
                <div class="center">
                    <div class="stock-info stock-name">通信以及设备</div>
                    <div class="stock-info stock-index green">+0.77%</div>
                    <div class="stock-info stock-leader">长江通信</div>
                    <div class="stock-info stock-change">
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
            <li class="grid stock-content-horizontal">
                <div class="grid-cell left">
                    <div>
                        <div class="stock-name">{this.props.name}</div>
                        <div class="stock-code">{this.props.code}</div>
                    </div>
                </div>
                <div class="grid-cell stock-info stock-index right red">8.09</div>
                <div class="grid-cell stock-info stock-change right red">+10.07%</div>
            </li>
        );
    }
}

export {
    BlockStockTip,
    RowStockTip
} ;