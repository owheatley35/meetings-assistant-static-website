import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Auth0Provider
            domain="oliwheatley.eu.auth0.com"
            clientId="mdXr3UNFvfDNl8rl7npeY6jfu4Hd1Qoa"
            redirectUri={window.location.origin}
            audience="meetings-assistant-api"
            scope="read:messages"
        >
            <App />
        </Auth0Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
