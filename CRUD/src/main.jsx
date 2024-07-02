import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Signup from './Components/Signup.jsx'
import Home from './Components/Home.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/home',
    element:<Home/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
