import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider/AuthProvider'
import { ToastContainer } from 'react-toastify'
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <PrivateRoute>
        <AuthProvider>
          <ToastContainer></ToastContainer>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </PrivateRoute>
    </div>
  </React.StrictMode>,
)
