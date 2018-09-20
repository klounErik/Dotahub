import React, {Component} from 'react'
import './Streams.css'
import Loader from '../Loader/Loader';

export default class Streams extends Component{
    state ={
        streams: []
    }

    getStreams = async () =>{
        fetch('http://localhost:1234/api/streams')
        .then(res => res.json())
        .then(json => this.setState({streams: json}))
    }

    componentDidMount(){
        this.getStreams()     
    }

    render(){
        const {streams} = this.state
        if(streams.length === 0){
            return <Loader/>
        }
        const liste = streams.data.map((stream, index) =>{
            console.log(stream)
            let thumbnail = stream.thumbnail_url.split('{width}x{height}')
            let newThumbnail = thumbnail[0]+'350x200'+thumbnail[1]
            return(
            <div key={index} className="streamcontainer">
            <ul>{stream.title}</ul>
            <img alt="streams" src={newThumbnail}></img>
            <ul>{stream.viewer_count}</ul>
            </div>
            )
        })
        return(
        <div className="wrapper">
            {liste}
        </div>)
    }
}