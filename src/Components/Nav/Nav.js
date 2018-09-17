import React, {Component} from 'react'
import dota from '../../Images/dota.png'

export default class Nav extends Component{
    render(){
        return(
        <div className="navbar">
        <span>
          <a href="/home"><img src={dota} alt="dota" height={75} width={75}/>
          </a>
        </span>
        <ul>
          <span>
            <a href="/profile">Profile</a>
          </span>
        </ul>
        <ul>
          <span>
            <a href="/matches">Matches</a>
          </span>
        </ul>
        <ul>
          <span>
            <a href="/news">News</a>
          </span>
        </ul>
        <ul>
          <span>
            <a href="/updates">Updates</a>
          </span>
        </ul>
      </div>
        )
    }
}