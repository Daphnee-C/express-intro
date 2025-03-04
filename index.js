import express, { response } from 'express'
// Import de library express
import movies from './data/movies.js'

const app = express()
// App take everything from express

const movies = [
    {
    id : 1,
    title : `L'amour ouf `,
    genre : ''
},
{
    id : 2,
    title : 'Dune 2',
    genre : 'Schience-Fiction'
},

{
    id : 3,
    title : 'Old boy',
    genre : 'Thriller'
},
{
    id : 4,
    title : 'No other land',
    genre : ''
}


]

app.get('/', (request, response) => {
    return response.end(`Hello world`)
})
// Our first route that takes the path as first parameters, request and response and return a response

app.get('/movies', (request, response) => {
    return response.json(movies)
})


app.listen(3000, () => {
    console.log(`server is running on port 3000`)
})
// the method listen is used to start our server