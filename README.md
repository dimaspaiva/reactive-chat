# reactive-chat

Simple chat with react, express and socket.io.
The idea is provide simple actions to a client through a chata.

To run is mandatory to have a mongodb running, you can use docker, to create just run: `docker run --name mongo-socket -p 27017:27017 -d mongo`

run dev: yarn dev

---
### Server

Node + Express + Socket.io + Typescript
run dev: yarn dev:server 

---
### Client

Webpack + React + Typescript
run dev: yarn dev:client 

---
#### To-dos

- Improve complexity of actions
- Improve decision tree responses
- Persist user message
