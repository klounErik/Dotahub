const express = require('express')
const Router = express.Router()
const fetch = require('node-fetch');

Router.get('/heroes', (req, res) => {
    fetch('https://api.opendota.com/api/heroes')
    .then(results => results.json())
    .then(json => res.send(json))
})

Router.get('/updates', (req, res) => {
    fetch('http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=570&count=10&maxlength=100&format=json')
    .then(json => json.json())
    .then(result => res.send(result))
})

Router.get('/player/:id', (req, res) =>{
    fetch(`https://api.opendota.com/api/players/${req.params.id}`)
    .then(toJson => toJson.json())
    .then(json => res.send(json))
})

Router.get('/matches', (req, res) => {
    fetch('https://api.opendota.com/api/players/28122613/recentmatches')
    .then(results => results.json())
    .then(json => res.send(json))
})

Router.get('/matchdetail/:id', (req, res) => {
    fetch(`https://api.opendota.com/api/matches/${req.params.id}`)
    .then(results => results.json())
    .then(json => res.send(json))
})

Router.get('/profile', (req, res) => {
    fetch('https://api.opendota.com/api/players/28122613')
    .then(results => results.json())
    .then(json => res.send(json))
})

module.exports = Router