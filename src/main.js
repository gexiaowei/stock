/**
 * main.js
 * @author Vivian
 * @version 1.0.0
 * copyright 2014-2016, gandxiaowei@gmail.com all rights reserved.
 */
import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';

import routes from './routes';

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('content'));