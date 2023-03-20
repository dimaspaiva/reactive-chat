import React from 'react'

import Home from './pages/Home'
import Toast from './components/ToastWrapper'

import 'react-toastify/dist/ReactToastify.css';

import './setup/reset.css'
import './setup/global.css'


const App = () => {
  return <>
    <Home />
    <Toast />
  </>
}

export default App
