import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserProvider from './context/UserContext';


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
     <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

//wrappar app i userProvider från UserContext så vi får tillgång till statsen i hela appen