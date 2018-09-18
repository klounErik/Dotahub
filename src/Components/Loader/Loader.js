import React, {Component} from 'react'
import './Loader.css'

export default class Loader extends Component{
    render(){
        return <div id="loadercontainer">
            <div className="loader"></div>
            <h1>Loading</h1>
            </div>
    }
}