import React, {Component} from 'react'
import { Table } from 'semantic-ui-react'
import Loader from '../../Loader/Loader'
import Gamemode from '../../../Data/Gamemode.json'
import './Matches.css'

export default class Matches extends Component{
        state = {
            matches: [],
            heroes: []
        }
    
    componentDidMount(){
        this.props.getMatches(this.props.id)
        .then(res => this.setState({matches: res}))
        this.props.gethero()
        .then(res => this.setState({heroes: res}))
    }
    
    render(){
      const {matches, heroes} = this.state
      console.log(matches)
      let skill
      let lobby_type
      if(matches.length === 0 || heroes.length === 0){
          return <Loader/>
      }
      const list = matches.map((matches, index) =>{
        let found = heroes.find(e => e.id === matches.hero_id)
        let split = found.name
        let getname = split.split('npc_dota_hero_')
        let minutes = Math.floor(matches.duration / 60.0)
        let seconds = matches.duration - minutes * 60.0
        let startTime =  new Date(1000*matches.start_time)

        switch(matches.skill){
            case 1:
            skill = "Normal"
            break
            case 2:
            skill = "High"
            break
            case 3: 
            skill = "Very High"
            break
            default: skill = "Normal"
            break
        }
        switch(matches.lobby_type){
            case 0:
            lobby_type = "Normal"
            break
            case 7:
            lobby_type = "Ranked"
            break
            default: lobby_type = "Normal"
            break
        }

        return (
        <Table.Row key={index}>
        <Table.Cell><a href={`/matchdetails/${matches.match_id}`}>{matches.match_id}</a></Table.Cell>
        <Table.Cell>{Gamemode.GameMode[matches.game_mode].Name}</Table.Cell>
        <Table.Cell>{lobby_type}</Table.Cell>
        <Table.Cell>
        <img src={`http://cdn.dota2.com/apps/dota2/images/heroes/${getname[1]}_full.png`} 
         height={50} width={90} alt="hero"/>
        </Table.Cell>
        <Table.Cell>{matches.radiant_win ? 'Radiant wins' : 'Dire wins'}</Table.Cell>
        <Table.Cell>{matches.kills}</Table.Cell>
        <Table.Cell>{matches.deaths}</Table.Cell>
        <Table.Cell>{matches.assists}</Table.Cell>
        <Table.Cell>{skill}</Table.Cell>
        <Table.Cell>{minutes}:{seconds}</Table.Cell>
        <Table.Cell>{startTime.toLocaleString('de-DE')}</Table.Cell>
        </Table.Row>
        )
      })
        return( 
            <div>
            <div className="mathces">
             <Table className="table" inverted selectable>
                <Table.Header>
                <Table.Row>
                <Table.HeaderCell>Match</Table.HeaderCell>
                <Table.HeaderCell>Gamemode</Table.HeaderCell>
                <Table.HeaderCell>Lobby Type</Table.HeaderCell>
                  <Table.HeaderCell>Hero</Table.HeaderCell>
                  <Table.HeaderCell>Result</Table.HeaderCell>
                  <Table.HeaderCell>Kills</Table.HeaderCell>
                  <Table.HeaderCell>Deaths</Table.HeaderCell>
                  <Table.HeaderCell>Assists</Table.HeaderCell>
                  <Table.HeaderCell>Skill</Table.HeaderCell>
                  <Table.HeaderCell>Duration</Table.HeaderCell>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                    </Table.Row>
                 </Table.Header>
              <Table.Body className="table">
                  {list}
              </Table.Body>
            </Table>
            </div>
            </div>
        )
    }
}