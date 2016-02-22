/**
 * main.js
 * @author Vivian
 * @version 1.0.0
 * copyright 2014-2016, gandxiaowei@gmail.com all rights reserved.
 */
import {Router,browserHistory} from 'react-router'
import {Render} from 'react-dom';

import routes from './routes';

Render((
    <Router history={browserHistory}>
        {routes}
    </Router>
), document.getElementById('content'));