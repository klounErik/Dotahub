import React, {Component} from 'react'
import './Streams.css'
import Loader from '../Loader/Loader';

export default class Streams extends Component{
    state ={
        streams: [],
        users: []
    }

    getStreams = async () =>{
        fetch('http://localhost:1234/api/streams')
        .then(res => res.json())
        .then(json => this.setState({streams: json}))
    }

    getUser = async (id) => {
        fetch(`http://localhost:1234/api/streams/users/${id}`)
        .then(res => res.json())
        .then(json => console.log(json))
    }

    componentDidMount(){
        this.getStreams()
    }
    render(){
        const {streams, users} = this.state
        if(streams.length === 0){
            return <Loader/>
        }
        console.log(users)
        const liste = streams.data.map((stream, index) =>{
            let thumbnail = stream.thumbnail_url.split('{width}x{height}')
            let newThumbnail = thumbnail[0]+'350x200'+thumbnail[1]
            return(
            <div key={index} className="streamcontainer">
            <ul>{stream.title}</ul>
            <ul>{stream.viewer_count}</ul>
            <img src={newThumbnail}></img>
            </div>
            )
        })
        console.log(streams)
        return(<div>
            {liste}
        </div>)
    }
}