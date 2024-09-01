//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './i18n';
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')).render(
    <App />
)
