import React from 'react';
import ReactDOM from 'react-dom';
import './components/App/App.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import  {createStore, applyMiddleware} from 'redux'
import allReducers from './reducers/index'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(allReducers, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
