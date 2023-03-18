import http from 'http'
import app from "./config/app";
import { insertWebSocketOnServer } from './websocket';

const PORT = process.env.PORT || 8081

const server = http.createServer(app)
insertWebSocketOnServer(server)

server.listen(PORT, () => {
  console.log(`server running, at http://localhost:${PORT}`)
})
