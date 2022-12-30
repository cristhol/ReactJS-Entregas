import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initFirestoreApp } from './firestore/config'
import './index.css'

initFirestoreApp()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
