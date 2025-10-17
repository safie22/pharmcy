import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'

const rootElement = document.getElementById('app')
if (!rootElement) {
  console.error('Element with id "app" not found')
  document.body.innerHTML = '<div style="padding: 20px; color: red;">Error: Element with id "app" not found</div>'
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}