import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import AppRoutes from './AppRoutes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>
)
