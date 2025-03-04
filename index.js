import express, { response } from 'express'
// Import de library express
import movies from './data/movies.js'

const app = express()
// App take everything from express

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/', (request, response) => {
    return response.end(`Hello world`)
})
// Our first route that takes the path as first parameters, request and response and return a response

app.get('/movies', (request, response) => {
    return response.json(movies)
})

app.get('/movies/:id', (request, response) => {

  const movieID = request.params.id
    //save into a variable the value of the params
    
    //const {id} = request.params
    //console.log(id)

    const movieByID= movies.find(movie => movie.id == movieID)

    if (!movieByID) {
    //return response.json(`movie not found`)
    return response.status(404).json({message : `movie not found` })
}

    return response.status(200).json(movieByID) 
})

app.post('/movies', (request, response) => {
    //console.log (reques.body)
    const {title, genre} = request.body
if(!title, !genre) {
    response.status(400).json({message : 'All fields are required'})
}
    const newMovie = {
        id : movies.length +1,
        title, 
        genre
    }
    movies.push(newMovie)
    return response.status(201).json(newMovie)
})

app.listen(3000, () => {
    console.log(`server is running on port 3000`)
})
// the method listen is used to start our server