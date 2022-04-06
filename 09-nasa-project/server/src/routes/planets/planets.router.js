const express = require('express')

const { 
    httpGetAllPlanets 
} = require('./planets.controller')

const planetsRouter = express.Router()

planetsRouter.get('/planets', getAllPlanets)

module.exports = planetsRouter