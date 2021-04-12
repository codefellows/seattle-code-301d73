import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-4rwdhvtd.us.auth0.com"
    clientId="HWQV98E0OwgjRPfHq6GwZCcmO0SfrZHE"
    redirectUri="http://localhost:3000"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// once you sign up for an Auth0 account, they will provide you with the domain and clientId

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Auth0Provider } from '@auth0/auth0-react';
// import App from './App';
// ReactDOM.render(
//   <Auth0Provider
//     domain="YOUR_DOMAIN"
//     clientId="YOUR_CLIENT_ID"
//     redirectUri={window.location.origin}
// >
//   <App />
// </Auth0Provider>,
// document.getElementById('app')
// );
