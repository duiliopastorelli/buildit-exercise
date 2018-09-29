import React from 'react';
import ReactDOM from 'react-dom';

// Normalize.css is imported and handled by Webpack for a more consistent
// crossbrowser experience
import 'normalize.css';

import './style/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
