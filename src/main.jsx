import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ProviderContext } from './context/index.contex'
import { BrowserRouter } from "react-router-dom";
import Apps from './Apps'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
     <ProviderContext>
      <Apps />
      </ProviderContext>
     </BrowserRouter>
  </React.StrictMode>,
)
