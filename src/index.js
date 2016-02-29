import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <div>
        <Provider store={store}>
            {() => <App /> }
        </Provider>
    </div>,
    document.getElementById('app')
);