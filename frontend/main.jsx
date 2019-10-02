//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store = configureStore();

    // testing
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store} />, root)

});