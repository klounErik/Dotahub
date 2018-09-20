import React, {Component} from 'react'
import './PlayerProfile.css'
import { Table } from 'semantic-ui-react'
import Matches from './Matches/Matches'
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
    componentDidMount(){
        this.props.getPlayerInfo(this.props.match.params.id)
        .then(res => this.setState({profile: res}))
        this.props.getPlayerHeroes(this.props.match.params.id)
        .then(res => this.setState({playerheroes: res}))
        this.props.gethero()
        .then(res => this.setState({heroes: res}))
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
            <Table.Cell><img alt="hero" height={50} src={`http://cdn.dota2.com/apps/dota2/images/heroes/${findhero.name.split('npc_dota_hero_')[1]}_full.png`}></img></Table.Cell>
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
                <div className="profileContainer">
                <img className="profilepic" alt="Avatar" src={profile.profile.avatarfull}/>
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
                </div>
                </header>
                </section>
                <div className="tablecontainer">
                <section className="matches">
                <h1>Recent Matches</h1>
                <Matches gethero={this.props.gethero} getMatchDetails={this.props.getMatchDetails} getMatches={this.props.getMatches} id={this.props.match.params.id}/>
                </section>
                <section className="playedheroes">
                <h1>Most Played Heroes</h1>
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
                </div>
        )
    }
}