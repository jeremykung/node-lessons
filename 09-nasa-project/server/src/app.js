// having app.js isolates EXPRESS CODE from server code
// Express is just a middleware that handles requests to our server

// Imports
    // node
const path = require('path')

    // npm packages
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

    // app routers
const planetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router')

// Create express app
const app = express()

// Middleware
    // security
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(morgan('combined'))

    // express
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

    // app
app.use(planetsRouter)
app.use(launchesRouter)

// this sets all url rendering to client side url rendering
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app