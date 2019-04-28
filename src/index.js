/* eslint react/jsx-filename-extension: "off" */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

// Redux store
import configureStore from './shared/redux/configureStore'

// Routes
import AppRoutes from './routes';

//Configuring Redux Store
const store = configureStore(window.initialState);

// DOM
const rootElement = document.getElementById('root')

// App Wrapper
const renderApp = Component => {
  render(
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>,
    rootElement
  );
};

// Render App
renderApp(AppRoutes);
