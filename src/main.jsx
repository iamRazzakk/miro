import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRouter from './Router/Router'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='md:w-[1020px] mx-auto lg:w-[1280px]'>
      {/* <QueryClientProvider client={QueryClient}> */}
        <RouterProvider router={myCreatedRouter}>
        </RouterProvider>
      {/* </QueryClientProvider> */}
    </div>
  </React.StrictMode>,
)