import express from 'express'
import Movie from '../models/Movie.js'

const app = express()

app.use(express.static('exercises/public'))

app.get("/", async(req, res)=> {
    const results = await Movie.findAll()
    res.send(results)
   
})

export default app
