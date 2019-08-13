import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Main from './components/Main'
import Loader from './components/Loader'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faCheckSquare, faExclamation} from '@fortawesome/free-solid-svg-icons'

// BUILD FONT AWESOME LIB
library.add(faCoffee, faCheckSquare, faExclamation)

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
