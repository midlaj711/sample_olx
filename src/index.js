/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/FirebaseContext';
import { app, auth, db, storage } from './firebase/config';


ReactDOM.render(
<FirebaseContext.Provider value={{ app, auth, db, storage }}>
  <App/>
</FirebaseContext.Provider>
, document.getElementById('root')
); */

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import { app, auth, db, storage } from './firebase/config';

// Create a root container
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render the App component with FirebaseContext provider
root.render(
  <FirebaseContext.Provider value={{ app, auth, db, storage }}>
    <App />
  </FirebaseContext.Provider>
);
