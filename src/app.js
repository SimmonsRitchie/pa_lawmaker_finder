import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // We use this component to connect redux to react
import 'normalize.css/normalize.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import Main from './components/Main'
import configureStore from './store/configureStore';
import Loader from './components/Loader'

// CALLING STORE
const store = configureStore();

// CONNECTING STORE TO PROVIDER
// By wrapping 'AppRouter' component with 'Provider' and passing in store
// We're able to access redux store across all child components in AppRouter.
// We use 'Connect' in those components to grab info from store.
const jsx = (
    <Provider store={store}>
        <Main />
    </Provider>
);

// RENDERAPP
// Function below checks to see whether we have already rendered the page
// if we have, it ensures we don't render it again.
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true;
    }
};

// LOADING PAGE
ReactDOM.render(<Loader />, document.getElementById('app'))

// LOAD
renderApp()
