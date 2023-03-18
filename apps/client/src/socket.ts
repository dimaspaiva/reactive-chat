import { io } from 'socket.io-client'

const URL = "http://localhost:8081";
const socket = io(URL, { autoConnect: false });

socket.on('message', console.log)
socket.connect()

export default socket
