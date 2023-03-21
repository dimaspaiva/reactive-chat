import React from 'react'

import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Chat from '../pages/Chat'
import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <PageNotFound />
  },
  {
    path: '/chat',
    element: <Chat />,
  }
])

const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
