import app from "./config/app";

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`server running, at http://localhost:${PORT}`)
})
