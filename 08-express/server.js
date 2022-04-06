const express = require('express')

const path = require('path')

const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')

const app = express()

// Setup for view engines
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

const PORT = 3000

// Log request data
app.use((req, res, next) => {
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`)
})

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Express Test',
        caption: 'Aureum Leaves'
    })
})

app.use('/friends', friendsRouter)

app.use('/messages', messagesRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})