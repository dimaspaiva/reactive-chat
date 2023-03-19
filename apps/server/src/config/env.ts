export const env = {
  mongoDbURL: process.env.MONGO_URL || 'mongodb://localhost:27017/reactive-chat',
  port: process.env.PORT || 8081
}
