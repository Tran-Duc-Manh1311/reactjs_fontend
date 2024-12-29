import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS của react-toastify
import { ToastContainer } from 'react-toastify'; // Import ToastContainer

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer /> {/* Thêm ToastContainer ở đây */}
  </React.StrictMode>
);

reportWebVitals();
