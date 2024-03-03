import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRouter from './Router/Router'
import AuthProvider from './components/Auth/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className=''>
        <RouterProvider router={myCreatedRouter}>
        </RouterProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>
)