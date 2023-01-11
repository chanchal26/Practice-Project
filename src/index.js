import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContext from './UserContext/UserContext';
import { ProSidebarProvider } from 'react-pro-sidebar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </UserContext>
  </React.StrictMode>
);


reportWebVitals();
