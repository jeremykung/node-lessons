// SERVER code, where we import the express middleware to handle our requests

const http = require('http')

// import express middleware
const app = require('./app') 

const { loadPlanetsData } = require('./models/planets.model')

const PORT = process.env.PORT || 8000

// load express app into server
const server = http.createServer(app)

async function startServer() {
    await loadPlanetsData()
    
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
}

startServer()