import { Id, toast } from 'react-toastify';
import { io } from 'socket.io-client'

const URL = "http://localhost:8081";
const socket = io(URL, { autoConnect: false });
let toastId: Id

socket.on('connect', () => {
  if (toastId) {
    toast.dismiss(toastId)
    toastId = null
  }
  toast('Connected to message server!', { type: 'success' })
  console.log('connected!')
})

socket.on("connect_error", (err) => {
  if (!toastId) {
    toastId = toast('Fail to connect to message server', { type: 'error', autoClose: false })
  }
  console.log(err)
});

socket.connect()

export default socket
