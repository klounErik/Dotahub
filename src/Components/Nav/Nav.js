import React, {Component} from 'react'
import dota from '../../Images/dota.png'
import './Nav.css'

export default class Nav extends Component{
    render(){
        return(
        <div className="navbar">
        <span>
          <a href="/home"><img className="logo" src={dota} alt="dota"/>
          </a>
        </span>
        <ul>
          <span>
            <a href="/profile/28122613">Profile</a>
          </span>
        </ul>
        <ul>
          <span>
            <a href="/updates">Updates</a>
          </span>
        </ul>
        <ul>
          <span>
            <a href="/streams">Streams</a>
          </span>
        </ul>
        <ul>
          <span>
            <a href="/favouritestreams">Favourite Streams</a>
          </span>
        </ul>
      </div>
        )
    }
}