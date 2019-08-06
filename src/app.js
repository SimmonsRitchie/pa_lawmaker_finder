import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Main from './components/Main'
import Loader from './components/Loader'


// RENDERAPP
// Function below checks to see whether we have already rendered the page
// if we have, it ensures we don't render it again.
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(<Main />, document.getElementById('app'))
        hasRendered = true;
    }
};

// LOADING PAGE
ReactDOM.render(<Loader />, document.getElementById('app'))

// LOAD
renderApp()
