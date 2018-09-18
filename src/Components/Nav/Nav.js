import React, {Component} from 'react'
import dota from '../../Images/dota.png'

export default class Nav extends Component{
    render(){
        return(
        <div className="navbar">
        <span>
          <a href="/home"><img src={dota} alt="dota" height={70} width={70}/>
          </a>
        </span>
        <ul>
          <span>
            <a href="/profile/28122613">Profile</a>
          </span>
        </ul>
        <ul>
          <span>
            <a href="/matches">Matches</a>
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
      </div>
        )
    }
}