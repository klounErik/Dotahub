import React, {Component} from 'react'
import { NavLink, Redirect, Route} from 'react-router-dom'
import dota from '../../Images/dota.png'
import './Nav.css'
import 'antd/dist/antd.css';
import { Input } from 'antd'

const Search = Input

export default class Nav extends Component{
  state = {
    search: '',
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
            <NavLink 
            to="/profile/28122613" 
            activeStyle={{
              color: 'rgb(192, 17, 17)',
              backgroundColor: 'white',
              padding: 27
              }}>Profile</NavLink>
          </span>
        </ul>
        <ul>
          <span>
            <NavLink to="/updates" 
            activeStyle={{
              color: 'rgb(192, 17, 17)',
              backgroundColor: 'white',
              padding: 27
              }}>Patch Notes</NavLink>
          </span>
        </ul>
        <ul>
          <span>
            <NavLink to="/streams" 
            activeStyle={{
              color: 'rgb(192, 17, 17)',
              backgroundColor: 'white',
              padding: 27
              }}>Streams</NavLink>
          </span>
        </ul>
        <ul>
          <span>
            <NavLink to="/favouritestreams" 
            activeStyle={{
              color: 'rgb(192, 17, 17)',
              backgroundColor: 'white',
              padding: 27
              }}>Favourite Streams</NavLink>
          </span>
        </ul>
        <ul>
          <span>
        <Search size="default" onPressEnter={() => window.location.href = `/search/${this.state.search}`} onChange={(e) => this.setState({search: e.target.value})} placeholder="Search Player..."/>
        </span>
        </ul>
      </div>
        )
    }
}