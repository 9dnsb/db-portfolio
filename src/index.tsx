import React from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.min.css'
import 'devicon/devicon.min.css'
import App from './App'

const container = document.getElementById('root')
if (!container) {
  throw new Error("The element #root wasn't found")
}
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
