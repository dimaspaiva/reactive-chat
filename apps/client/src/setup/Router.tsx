import React from 'react'

import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <PageNotFound />
  }
])

const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
