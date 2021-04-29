import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';        
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import App from './App';
import './index.css';
const store = createStore(reducers, compose(applyMiddleware(thunk)));
var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://use.fontawesome.com/releases/v5.0.13/js/all.js';
    document.body.appendChild(script);



    ReactDOM.render(
  <Provider store={store}>
    <App />
<div className="connectfiras">
      <div className="rounded-social-buttons">
        <a className="social-button facebook" href="https://www.facebook.com/itsfiras2" target="_blank"><i className="fab fa-facebook-f" /></a>
        <a className="social-button twitter" href="https://www.twitter.com/itsfiras2" target="_blank"><i className="fab fa-twitter" /></a>
        <a className="social-button youtube" href="https://www.youtube.com/itsfiras2" target="_blank"><i className="fab fa-youtube" /></a>
        <a className="social-button instagram" href="https://www.instagram.com/itsfiras2" target="_blank"><i className="fab fa-instagram" /></a>
      </div>
</div>

  </Provider>,
  document.getElementById('root'),
);