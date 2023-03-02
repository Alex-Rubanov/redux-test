import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import * as actions from './actions';



const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

const update = () => {
    document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rnd(value);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>

    </>
  </React.StrictMode>
);

