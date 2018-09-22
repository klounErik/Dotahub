import React, {Component} from 'react'
import './Search.css'

export default class Search extends Component{
    state ={
        search: []
    }


    componentDidMount(){
        this.props.search(this.props.match.params.id)
        .then(res => this.setState({search: res}))
       
    }

    render(){
        const {search} = this.state

        const liste = search.map((player, index)=>{
            return (<div key={index} className="player">
                <a href={`/profile/${player.account_id}`}>
                <img alt="" height={75} src={player.avatarfull}/>
                <p>{player.personaname}</p>
                </a>
            </div>
            )
        })
        return (
        <div className="searchContainer">
            {liste}
        </div>
        )
    }
}