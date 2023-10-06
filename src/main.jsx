import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { mycreaRouter } from './componetes/Router/Routercomponents'
import ContextApi from './componetes/Contextapi/ContextApi'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ContextApi>
    <RouterProvider router={mycreaRouter}></RouterProvider>

  </ContextApi>
  <ToastContainer/>
  </React.StrictMode>,
)
