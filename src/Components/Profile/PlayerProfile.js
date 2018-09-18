import React, {Component} from 'react'
import './PlayerProfile.css'
import { Table } from 'semantic-ui-react'
import SteamIcon from '../../Images/steam-icon.png'
import Loader from '../Loader/Loader'
import DotabuffIcon from '../../Images/dotabuff-logo.png'
import Ranks from '../../Data/Ranks.json'

export default class PlayerProfile extends Component{
    state = {
        profile: [],
        ranks: [Ranks],
        playerheroes: [],
        heroes: []
    }

    getPlayerInfo = async () => {
        const req = await fetch(`http://localhost:1234/api/player/${this.props.match.params.id}`)
        const res = await req.json()
        this.setState({profile: res})
      }

    gethero = async () => {
        const req = await fetch('http://localhost:1234/api/heroes')
        const res = await req.json()
        this.setState({heroes: res})
    }
    
    getPlayerHeroes = async () => {
        const req = await fetch(`http://localhost:1234/api/profile/${this.props.match.params.id}`)
        const res = await req.json()
        this.setState({playerheroes: res})
    }  

    componentDidMount(){
        this.getPlayerInfo()
        this.getPlayerHeroes()
        this.gethero()
    }

    render(){
        const {profile, playerheroes, heroes} = this.state
        console.log(profile)
        if(profile.length === 0 || heroes.length === 0 || playerheroes.length === 0){
            return <Loader/>
        }
        const liste = playerheroes.map((hero, index)=>{
            let parse = parseInt(hero.hero_id, 10)
            let findhero = heroes.find(e => e.id === parse )
            let winChance = hero.win / hero.games * 100
            let lastPlayed = new Date(1000*hero.last_played)
            return (
            <Table.Row className="tableRows" key={index}>
            <Table.Cell><img alt="hero" height={75} src={`http://cdn.dota2.com/apps/dota2/images/heroes/${findhero.name.split('npc_dota_hero_')[1]}_full.png`}></img></Table.Cell>
            <Table.Cell>{findhero.localized_name}</Table.Cell>
            <Table.Cell>{hero.games}</Table.Cell>
            <Table.Cell>{winChance.toPrecision(4)}%</Table.Cell>
            <Table.Cell>{lastPlayed.toLocaleDateString('de-DE')}</Table.Cell>
            </Table.Row>
            )
        })
        const found = Ranks.Ranks.find(e => e.id === profile.rank_tier)
        return(
            <div className="playerprofile">
                <section className="profilesection">
                <header className="profileheader">
                <img alt="Avatar" src={profile.profile.avatarfull}/>
                <article>
                <span>
                <h1>{profile.profile.personaname}</h1>
                </span>
                </article>
                <img alt="rank" height={100} width={100} title={found.name} src={found.icon}></img>
                <span>
                <h4>Estimated MMR: {profile.mmr_estimate.estimate}</h4>
                <span>
                    <article>
                        <a href={`https://steamcommunity.com/profiles/${profile.profile.steamid}`}><img alt="steam" height={50} src={SteamIcon}/></a>
                        <a href={`https://www.dotabuff.com/players/${this.props.match.params.id}`}><img alt="dotabuff" height={50} src={DotabuffIcon}/></a>
                    </article>
                </span>
                </span>
                </header>
                </section>
                <section className="playedheroes">
                <Table className="table" inverted selectable>
                <Table.Header>
                <Table.Row>
                <Table.HeaderCell>Hero</Table.HeaderCell>
                <Table.HeaderCell>Hero</Table.HeaderCell>
                <Table.HeaderCell>Games</Table.HeaderCell>
                <Table.HeaderCell>Winrate</Table.HeaderCell>
                <Table.HeaderCell>Last Played</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body className="tablebody">
                    {liste}
                </Table.Body>
                </Table>
                </section>
                </div>
        )
    }
}