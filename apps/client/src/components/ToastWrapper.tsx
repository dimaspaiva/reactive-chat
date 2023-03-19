import React from "react"
import { ToastContainer, ToastContainerProps } from "react-toastify"

const toastConfig: ToastContainerProps = {
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  rtl: false,
  theme: 'colored',
  position: "top-right"
}

const Toast = () => {
  return <ToastContainer
    position={toastConfig.position}
    autoClose={toastConfig.autoClose}
    hideProgressBar={toastConfig.hideProgressBar}
    newestOnTop={toastConfig.newestOnTop}
    closeOnClick
    rtl={toastConfig.rtl}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme={toastConfig.theme}
  />
}

export default Toast
