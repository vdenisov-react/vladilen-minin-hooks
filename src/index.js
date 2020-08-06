import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './utils/serviceWorker';
import 'materialize-css';
import './index.css';

import App from './app/App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,

    document.getElementById('root'),
);

serviceWorker.unregister();
