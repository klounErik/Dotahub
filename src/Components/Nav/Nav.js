import React, {Component} from 'react'
import dota from '../../Images/dota.png'
import { Input } from 'antd';
import './Nav.css'

const Search = Input.Search;

export default class Nav extends Component{
    search = (id) =>{
      this.props.search(id)
      .then(result => this.props.getResult(result))
    }

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
            <a href="/updates">Patch Notes</a>
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
        <div className="search">
        </div>
      </div>
        )
    }
}