import http from 'http'
import app from "./config/app";
import { env } from './config/env';
import { insertWebSocketOnServer } from './websocket';

const server = http.createServer(app)
insertWebSocketOnServer(server)

server.listen(env.port, () => {
  console.log(`server running, at http://localhost:${env.port}`)
})
