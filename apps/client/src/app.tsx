import React from 'react'

import Toast from './components/ToastWrapper'
import Router from './setup/Router';

import 'react-toastify/dist/ReactToastify.css';

import './setup/reset.css'
import './setup/global.css'


const App = () => {
  return (
    <>
      <Router />
      <Toast />
    </>
  )
}

export default App
