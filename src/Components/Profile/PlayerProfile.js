import React, {Component} from 'react'

export default class PlayerProfile extends Component{
    state = {
        profile: [],
    }

    getPlayerInfo = async () => {
        const req = await fetch('http://localhost:1234/api/profile')
        const res = await req.json()
        this.setState({profile: res})
      }

    componentDidMount(){
        this.getPlayerInfo()
    }
    render(){
        return(
            <div className="playerprofile">
            </div>
        )
    }
}