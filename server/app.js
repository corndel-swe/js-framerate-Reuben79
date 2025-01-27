import express from 'express'

const app = express()

app.use(express.static('exercises/public'))

export default app
