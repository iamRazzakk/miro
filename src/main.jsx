import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRouter from './Router/Router'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={QueryClient}>
      <div className='md:w-[1020px] lg:w-[1280px]'>
        <RouterProvider router={myCreatedRouter}>
        </RouterProvider>
      </div>
    </QueryClientProvider>
  </React.StrictMode>,
)