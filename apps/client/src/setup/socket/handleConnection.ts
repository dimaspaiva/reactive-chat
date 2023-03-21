import { toast, Id } from "react-toastify";
import { Socket } from "socket.io-client";

const handleConnection = (socket: Socket) => {
  let errorToastId: Id

  socket.on('connect', () => {
    if (errorToastId) {
      toast.dismiss(errorToastId)
      errorToastId = null
    }
    toast('Connected to message server!', { type: 'success' })
    console.log('connected!')
  })

  socket.on("connect_error", (err) => {
    if (!errorToastId) {
      errorToastId = toast('Fail to connect to message server', { type: 'error', autoClose: false })
    }
    console.error(err)
  });
}

export default handleConnection
