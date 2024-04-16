import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import barreauReducer from './reducers/barreaux';

const store = legacy_createStore(barreauReducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);