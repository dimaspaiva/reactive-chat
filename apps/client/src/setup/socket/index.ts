import { Id, toast } from 'react-toastify';
import { io, Socket } from 'socket.io-client'
import { User } from '../../contexts/UserContext';
import handleConnection from './handleConnection';

const URL = "http://localhost:8081";

export const createSocket = (user: User): Socket => {
  const socket = io(URL, {
    auth: user,
    autoConnect: false
  });

  handleConnection(socket)

  return socket
}

export default createSocket
