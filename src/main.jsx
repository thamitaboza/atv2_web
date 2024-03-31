import React from 'react'
import ReactDOM from 'react-dom/client'
import ContextA from './ContextA.jsx'
import ClassA from './ClassContext.jsx'
import { ComponenteAvo } from './02Pokemon/ComponenteAvo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextA />
    <ClassA />

    <ComponenteAvo />
  </React.StrictMode>,
)
