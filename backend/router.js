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
    fetch('https://api.opendota.com/api/players/28122613/matches?limit=100')
    .then(results => results.json())
    .then(json => res.send(json))
})

Router.get('/matchdetail/:id', (req, res) => {
    fetch(`https://api.opendota.com/api/matches/${req.params.id}`)
    .then(results => results.json())
    .then(json => res.send(json))
})

Router.get('/profile/:id', (req, res) => {
    fetch(`https://api.opendota.com/api/players/${req.params.id}/heroes`)
    .then(results => results.json())
    .then(json => res.send(json))
})

Router.get('/redditnews', (req, res) => {
    fetch(`https://www.reddit.com/r/dota2.json`)
    .then(results => results.json())
    .then(json => res.send(json))
})

Router.get('/streams', (req, res) => {
    fetch('https://api.twitch.tv/helix/streams/?game_id=29595',{
            method: 'GET',
            headers:{
                "Client-ID": "nt60tmurnk35i1xj18lvdp8q02dhv6"
            }}).then(result => result.json())
            .then(json => res.send(json))   
})

Router.get('/streams/users/:id', (req, res) => {
    fetch(`https://api.twitch.tv/helix/users?id=${req.params.id}`,{
            method: 'GET',
            headers:{
                "Client-ID": 
            }}).then(result => result.json())
            .then(json => res.send(json))   
})

module.exports = Router