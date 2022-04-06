const express = require('express')

const friendsController = require('../controllers/friends.controller')
const friends = require('../models/friends.model')

const friendsRouter = express.Router()

// Middleware
friendsRouter.use((req, res, next) => {
    console.log('ip', req.ip)
    next()
})

// Endpoint Routes
friendsRouter.post('/', friendsController.postFriend)
friendsRouter.get('/', friendsController.getFriends)
friendsRouter.get('/:friendId', friendsController.getOneFriend)

module.exports = friendsRouter