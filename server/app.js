import express from 'express'
import Movie from '../models/Movie.js'

const app = express()

app.use(express.static('exercises/public'))

app.get("/", async(req, res)=> {
    try {
    const results = await Movie.findAll()
    res.send(results)
    } catch (error) {
    console.error(error)
    res.status(500). send('An error occurred')
    }

})

export default app
