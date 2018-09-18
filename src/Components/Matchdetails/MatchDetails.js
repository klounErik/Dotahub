import React, {Component} from 'react'
import {Table} from 'semantic-ui-react'
import Dire from '../../Images/dire.png'
import Radiant from '../../Images/radiant.png'
import './MatchDetails.css'

export default class MatchDetails extends Component {
    state = {
        matchdetails: [],
        players: [],
        heroes: [],
    }

    componentDidMount(){
        this.gethero()
        this.getMatchDetails()
    }

    getMatchDetails = async () => {
        const req = await fetch(`http://localhost:1234/api/matchdetail/${this.props.match.params.matchid}`)
        const res = await req.json()
        this.setState({matchdetails: res})
        this.setState({players: res.players})
    }

    gethero = async () => {
        const req = await fetch('http://localhost:1234/api/heroes')
        const res = await req.json()
        this.setState({heroes: res})
    }
    /*getplayer = async (id) =>{
        const req = await fetch(`http://localhost:1234/api/player/${id}`)
        const res = await req.json()
    }*/
   
    render(){
        const {players, heroes} = this.state
        if(players.length === 0 || heroes.length === 0){
            return <h1 style={{textAlign: 'center'}}>Loading...</h1>
        }
        let duration = this.state.matchdetails.duration / 60
        const radiant = players.map((players, index) =>{
            let found = this.state.heroes.find(e => e.id === players.hero_id)
            let split = found.name
            let getname = split.split('npc_dota_hero_')
            if(players.isRadiant === true){
                return(
                    <Table.Row key={index}>
                    <Table.Cell><img src={`http://cdn.dota2.com/apps/dota2/images/heroes/${getname[1]}_full.png`} 
                    height={50} width={90} alt="hero"/></Table.Cell>
                    <Table.Cell><a href={`/profile/${players.account_id}`}>{players.personaname}</a></Table.Cell>
                    <Table.Cell>{players.kills}</Table.Cell>
                    <Table.Cell>{players.deaths}</Table.Cell>
                    <Table.Cell>{players.assists}</Table.Cell>
                    <Table.Cell>{players.last_hits}</Table.Cell>
                    <Table.Cell>{players.denies}</Table.Cell>
                    <Table.Cell>{players.gold_per_min}</Table.Cell>
                    <Table.Cell>{players.xp_per_min}</Table.Cell>
                    <Table.Cell>{players.hero_damage}</Table.Cell>
                    <Table.Cell>{players.hero_healing}</Table.Cell>
                    </Table.Row>
                )
            }
            return null
        })
        const dire = players.map((players, index) =>{
            let found = this.state.heroes.find(e => e.id === players.hero_id)
            let split = found.name
            let getname = split.split('npc_dota_hero_')
            if(players.isRadiant === false){
                return(
                    <Table.Row key={index}>   
                    <Table.Cell>
                    <img src={`http://cdn.dota2.com/apps/dota2/images/heroes/${getname[1]}_full.png`} 
                    height={50} width={90} alt="hero"/></Table.Cell>
                    <Table.Cell><a href={`/profile/${players.account_id}`}>{players.personaname}</a></Table.Cell>
                    <Table.Cell>{players.kills}</Table.Cell>
                    <Table.Cell>{players.deaths}</Table.Cell>
                    <Table.Cell>{players.assists}</Table.Cell>
                    <Table.Cell>{players.last_hits}</Table.Cell>
                    <Table.Cell>{players.denies}</Table.Cell>
                    <Table.Cell>{players.gold_per_min}</Table.Cell>
                    <Table.Cell>{players.xp_per_min}</Table.Cell>
                    <Table.Cell>{players.hero_damage}</Table.Cell>
                    <Table.Cell>{players.hero_healing}</Table.Cell>
                    </Table.Row>
                )
            }
            return null
        })
        return(
        <div className="matchdetails">
        <header className="headerWrapper">
        <div className="radiant">
            <img src={Radiant} height={100} width={100} alt="radiant"/>
            <h1>{this.state.matchdetails.radiant_score}</h1>
            </div>
            <h1>{duration.toPrecision(2)} Minutes</h1>
            <div className="dire">
            <img src={Dire} height={100} width={100} alt="dire"/>
            <h1>{this.state.matchdetails.dire_score}</h1>
                </div>
        </header>
        <div className="matchContainer">
            <div className="radiantside">
           <Table inverted selectable>
              <Table.Header>
                <Table.Row>
                <Table.HeaderCell>Hero</Table.HeaderCell>
                <Table.HeaderCell>Player</Table.HeaderCell>
                <Table.HeaderCell>Kills</Table.HeaderCell>
                <Table.HeaderCell>Deaths</Table.HeaderCell>
                <Table.HeaderCell>Assists</Table.HeaderCell>
                <Table.HeaderCell>Last hits</Table.HeaderCell>
                <Table.HeaderCell>Denies</Table.HeaderCell>
                <Table.HeaderCell>GPM</Table.HeaderCell>
                <Table.HeaderCell>XPM</Table.HeaderCell>
                <Table.HeaderCell>DMG</Table.HeaderCell>
                 <Table.HeaderCell>HEAL</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body className="table">
                    {radiant}
                </Table.Body>
                </Table>
                </div>
                <div className="direside">
                <Table inverted selectable>
                <Table.Header>
                <Table.Row>
                <Table.HeaderCell>Hero</Table.HeaderCell>
                <Table.HeaderCell>Player</Table.HeaderCell>
                <Table.HeaderCell>Kills</Table.HeaderCell>
                <Table.HeaderCell>Deaths</Table.HeaderCell>
                <Table.HeaderCell>Assists</Table.HeaderCell>
                <Table.HeaderCell>Last hits</Table.HeaderCell>
                <Table.HeaderCell>Denies</Table.HeaderCell>
                <Table.HeaderCell>GPM</Table.HeaderCell>
                <Table.HeaderCell>XPM</Table.HeaderCell>
                <Table.HeaderCell>DMG</Table.HeaderCell>
                <Table.HeaderCell>HEAL</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body className="table">
                    {dire}
                </Table.Body>
                </Table>
                </div>
                </div>
                </div>
           )
    }
}