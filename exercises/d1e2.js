// exercises/d1e2.js
import express from 'express'
import path from 'path'

const app = express()
app.set('views', 'exercises/views') // <-- Don't change

app.set('view ungine', 'ejs')

app.get('/d1e2', (req, res) => {
  const msg = 'Hello from d1e2!'
  // TODO: Render 'd1e2.ejs' and pass the msg
  res.render('d1e2.ejs', { msg })
})

// TODO: Open d1e2.ejs and follow the instructions

export default app
