import React, {Component} from 'react'
import {Table} from 'semantic-ui-react'
import Dire from '../../Images/dire.png'
import Radiant from '../../Images/radiant.png'
import Gamemode from '../../Data/Gamemode.json'
import Items from '../../Data/Items.json'
import './MatchDetails.css'
import {Chart, Axis, Tooltip, Geom} from "bizcharts";
 

export default class MatchDetails extends Component {
    state = {
        matchdetails: [],
        players: [],
        heroes: [],
    }

    componentDidMount(){
        this.props.getMatchDetails(this.props.match.params.matchid)
        .then(res => this.setState({
            matchdetails: res,
            players: res.players
        }))
        this.props.gethero()
        .then(res => this.setState({heroes: res}))
    }
    render(){
        const {players, heroes ,matchdetails} = this.state
        console.log(matchdetails)
        if(players.length === 0 || heroes.length === 0){
            return <h1 style={{textAlign: 'center'}}>Loading...</h1>
        }
        let gold = []
        let xp = []
        let gameType

        switch (matchdetails.lobby_type) {
            case 7:
                gameType = 'Ranked'
                break
            case 0:
                gameType = 'Normal'
                break
            default:
                gameType = 'Normal'
                break;
        }

        if(matchdetails.radiant_gold_adv === null){
            
        }else{
            matchdetails.radiant_gold_adv.forEach((element, index) => {
                gold.push({'Minutes':index,'Gold':element})
            });
        }
        if(matchdetails.radiant_xp_adv === null){
            
        }else{
            matchdetails.radiant_xp_adv.forEach((element, index) => {
                xp.push({'Minutes':index, 'XP':element})
            });
        }
        
        let minutes = Math.floor(matchdetails.duration / 60)
        let seconds = matchdetails.duration - minutes * 60
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
                    <Table.Cell>{players.actions_per_min}</Table.Cell>
                    <Table.Cell>{players.gold_per_min}</Table.Cell>
                    <Table.Cell>{players.xp_per_min}</Table.Cell>
                    <Table.Cell>{players.hero_damage}</Table.Cell>
                    <Table.Cell>{players.hero_healing}</Table.Cell>
                    <Table.Cell>
                    {0 === players.item_0 ? <span/> : <img alt="" height={50} src={`http://cdn.dota2.com/apps/dota2/images/items/${Items[players.item_0]}_lg.png`}/>}
                    {0 === players.item_1 ? <span/> : <img alt="" height={50} src={`http://cdn.dota2.com/apps/dota2/images/items/${Items[players.item_1]}_lg.png`}/>}
                    {0 === players.item_2 ? <span/> : <img alt="" height={50} src={`http://cdn.dota2.com/apps/dota2/images/items/${Items[players.item_2]}_lg.png`}/>}
                    {0 === players.item_3 ? <span/> : <img alt="" height={50} src={`http://cdn.dota2.com/apps/dota2/images/items/${Items[players.item_3]}_lg.png`}/>}
                    {0 === players.item_4 ? <span/> : <img alt="" height={50} src={`http://cdn.dota2.com/apps/dota2/images/items/${Items[players.item_4]}_lg.png`}/>}
                    {0 === players.item_5 ? <span/> : <img alt="" height={50} src={`http://cdn.dota2.com/apps/dota2/images/items/${Items[players.item_5]}_lg.png`}/>}
                    </Table.Cell>
                    </Table.Row>
                )
            }
            return null
        })
        const mapBannedHeroes = matchdetails.picks_bans.map((hero, index)=>{
        let bannedHereos = heroes.find(e => e.id === hero.hero_id)
        let splitBannedHeroes = bannedHereos.name
        let getBannedHeroes = splitBannedHeroes.split('npc_dota_hero_')
        return (<div key={index} className="bans">
             <img src={`http://cdn.dota2.com/apps/dota2/images/heroes/${getBannedHeroes[1]}_full.png`} 
                    height={50} width={90} alt="hero"/>
                    </div>)
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
                    <Table.Cell>{players.actions_per_min}</Table.Cell>
                    <Table.Cell>{players.gold_per_min}</Table.Cell>
                    <Table.Cell>{players.xp_per_min}</Table.Cell>
                    <Table.Cell>{players.hero_damage}</Table.Cell>
                    <Table.Cell>{players.hero_healing}</Table.Cell>
                    <Table.Cell>
                    {0 === players.item_0 ? <span/> : <img alt="" height={50} src={`http://cdn.dota2.com/apps/dota2/images/items/${Items[players.item_0]}_lg.png`}/>}
                    {0 === players.item_1 ? <span/> : <img alt="" height={50} src={`http://cdn.dota2.com/apps/dota2/images/items/${Items[players.item_1]}_lg.png`}/>}
                    {0 === players.item_2 ? <span/> : <img alt="" height={50} src={`http://cdn.dota2.com/apps/dota2/images/items/${Items[players.item_2]}_lg.png`}/>}
                    {0 === players.item_3 ? <span/> : <img alt="" height={50} src={`http://cdn.dota2.com/apps/dota2/images/items/${Items[players.item_3]}_lg.png`}/>}
                    {0 === players.item_4 ? <span/> : <img alt="" height={50} src={`http://cdn.dota2.com/apps/dota2/images/items/${Items[players.item_4]}_lg.png`}/>}
                    {0 === players.item_5 ? <span/> : <img alt="" height={50} src={`http://cdn.dota2.com/apps/dota2/images/items/${Items[players.item_5]}_lg.png`}/>}
                    </Table.Cell>
                    </Table.Row>
                )
            }
            return null
        })
        return(
        <div className="matchdetails">
        <header className="headerWrapper">
        <div className="score">
        <div className="radiant">
            <img src={Radiant} alt="radiant"/>
            <span>
            <h2>{this.state.matchdetails.radiant_score}</h2>
            </span>
            </div>
            <article>
            <span>
            <h2>{minutes}:{seconds}</h2>
            </span>
            <span>
            <h2>{gameType}</h2>
            </span>
            <span>
            <h2>{Gamemode.GameMode[this.state.matchdetails.game_mode].Name}</h2>
            </span>
            </article>
            <div className="dire">
            <img src={Dire} alt="dire"/>
            <span>
            <h2>{this.state.matchdetails.dire_score}</h2>
            </span>
            </div>
            </div>
           
        </header>
        <div className="matchContainer">
            <div className="radiantside">
            <h1>The Radiant {matchdetails.radiant_win ? "- Winner" : null}</h1>
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
                <Table.HeaderCell>APM</Table.HeaderCell>
                <Table.HeaderCell>GPM</Table.HeaderCell>
                <Table.HeaderCell>XPM</Table.HeaderCell>
                <Table.HeaderCell>DMG</Table.HeaderCell>
                 <Table.HeaderCell>HEAL</Table.HeaderCell>
                 <Table.HeaderCell>Items</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body className="table">
                    {radiant}
                </Table.Body>
                </Table>
                </div>
                <span>
                <h2>BANNED HEROES</h2>
                </span>
                <div className="bannedContainer">
                    {mapBannedHeroes}
                    </div>
                <div className="direside">
                <h1>The Dire{matchdetails.radiant_win ? null : " - Winner"}</h1>
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
                <Table.HeaderCell>APM</Table.HeaderCell>
                <Table.HeaderCell>GPM</Table.HeaderCell>
                <Table.HeaderCell>XPM</Table.HeaderCell>
                <Table.HeaderCell>DMG</Table.HeaderCell>
                <Table.HeaderCell>HEAL</Table.HeaderCell>
                <Table.HeaderCell>Items</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body className="table">
                    {dire}
                </Table.Body>
                </Table>
                </div>
                </div>
                <div className="chart">
                <h1>Gold Advantage</h1>
                <Chart height={400} data={gold} forceFit>
                <Axis name="Gold" title='Gold' tickLine={{stroke: "white"}} line={{stroke: "white"}} grid={{stroke: "white"}}/>
                <Axis name="Minutes" title='Minutes' line={{stroke: "white"}}  tickLine={{stroke: "white"}}/>
                <Tooltip crosshairs={{type : "y"}} />
                <Geom type="line" position="Minutes*Gold" size={4} color={'Gold'} shape={'smooth'}/>
                <Geom type="line" position="Minutes*Gold" size={4} color={'Minutes'} shape={'smooth'}/>
                </Chart>
                </div>
                <div className="chart">
                <h1>XP Advantage</h1>
                <Chart height={400} data={xp} forceFit>
                <Axis name="XP" title='XP' tickLine={{stroke: "white"}} line={{stroke: "white"}} grid={{stroke: "white"}}/>
                <Axis name="Minutes" title='Minutes' line={{stroke: "white"}}  tickLine={{stroke: "white"}}/>
                <Tooltip crosshairs={{type : "y"}} />
                <Geom type="line" position="Minutes*XP" size={4} color={'XP'} shape={'smooth'}/>
                <Geom type="line" position="Minutes*XP" size={4} color={'Minutes'} shape={'smooth'}/>
                </Chart>
                </div>
                </div>
           )
    }
}