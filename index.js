const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello Nathan!')
})

app.listen(port, () => {
  console.log(`Hi Nathan! Server is running on http://localhost:${port} :)`)
})
