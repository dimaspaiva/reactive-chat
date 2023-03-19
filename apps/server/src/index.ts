import http from 'http'
import app from "./config/app";
import { env } from './config/env';
import { MongoHelper } from './database/mongo';
import { insertWebSocketOnServer } from './websocket';

const server = http.createServer(app)
insertWebSocketOnServer(server)

MongoHelper.connect(env.mongoDbURL).then(() => {
  console.log('Mongo db is connected!')
  server.listen(env.port, () => {
    console.log(`server running, at http://localhost:${env.port}`)
  })
}).catch((err) => console.error(err))
